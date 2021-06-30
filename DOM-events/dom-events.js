function h1click(){
    console.log("Função sendo executada");
}

function changeH2(input){
    let h2 = document.getElementsByTagName("h2") [0];
    h2.innerText = input.value;
}