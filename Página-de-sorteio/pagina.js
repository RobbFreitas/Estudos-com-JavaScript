let pessoas = ["São Paulo", "Corinthias", "Santos", "Palmeiras", "Ponte Preta"]

function sortear(){

    let numeroPessoas = pessoas.length;

    let numeroSorteio = Math.floor(Math.random() * numeroPessoas);

    document.getElementById("visor").innerHTML = pessoas[numeroSorteio];
}