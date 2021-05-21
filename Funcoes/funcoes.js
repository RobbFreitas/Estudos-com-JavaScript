function media() {
    var nota1 = 10;
    var nota2 = 8;
    var media = (nota1 + nota2)/2;
    console.log(media); // 9
}

media(); // Duas caixas de alerta para informar o número e depois imprime o resultado


// Agora utilizando parâmetros
function mediaC(n1, n2){
    var notaA= n1;
    var notaB = n2;
    var mediaC = (notaA + notaB) / 2;
    console.log(mediaC);
}

mediaC(6, 5); // 5.5