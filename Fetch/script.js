let url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"

function Converter() {
    let input = document.getElementById("valor");
    let valor = input.value;

    fetch(url)
        .then((res) => {

            return res.json()
        })

        .then((data) => {
            console.log(data.USDBRL.high);
            let rate = data.USDBRL.high;

            let resultado = `${valor} dolares = ${rate * valor} em reais`;
            document.getElementById("resultado").innerHTML = resultado;
        })

}