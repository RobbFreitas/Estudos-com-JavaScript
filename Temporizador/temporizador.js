// function mudarCor(){

//     let h = document.getElementsByTagName("h1")[0];
//     h.style.color = "blue";
// }
var numero = 0;

var timer;

function atualizarTexto(){

    let h = document.getElementsByTagName("h1")[0];
    h.innerHTML += " " + numero;
    numero++;


}

function iniciar(){

    // let h = document.getElementsByTagName("h1")[0];
    // h.innerHTML = "Novo Título";

    // setTimeout( mudarCor, 1000);

    timer = setTimeout( atualizarTexto, 3000 )

}

function parar(){

    clearInterval(timer);

}