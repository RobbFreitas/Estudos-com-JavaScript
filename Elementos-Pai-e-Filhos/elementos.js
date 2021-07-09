// Como acessar elemento(s) pai(s) e filho(s)

window.onload = function(){

    // Selecionar o elemento pela Tag
    let h1 = document.getElementsByTagName("h1")

    for (let h of h1) {
        console.log(h)

        // "Escutando" a ordem
        h.addEventListener("click", qop)
    }

    // Função que vai exibir quem é o elemento pai
    function qop(e) {

        // "Colocado" o alvo sobre o elemento
        let t = e.target;
        console.log(t.parentElement)
    }
}