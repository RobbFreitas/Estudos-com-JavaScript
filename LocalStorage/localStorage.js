// local.Storage.setItem(); - Grava um dado
// local.Storage.getItem(); - Acessa o dado
// local.Storage.removeItem(); - Remove o dado
// Persistir os dados - Gravar e ter acesso, depois, a esses dados

onload = function(){

    let nome = localStorage.getItem("nome");
    let h1 = document.getElementById("nome");
    h1.innerHTML = nome;
}

function atualizar (element){
    
    let valor = element.value;
    console.log(valor)

    let h1 = document.getElementById("nome");
    h1.innerHTML = valor;

    localStorage.setItem("nome", valor);
}