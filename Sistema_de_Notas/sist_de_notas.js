// Nome do aluno - Nota 1 - Nota 2 - Média - Aprovado/Reprovado

var nomes = ["Mateus", "Marcos", "João"];
var notas1 = [7.0, 6.5, 9.5];
var notas2 = [8.0, 7.0, 8.5];

function media(n1,n2){
    return (n1 + n2) / 2;
} 

function passou(media) {

    if (media > 7 ){
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}

for (var index in nomes){
    var notaA = notas1[index];
    var notaB = notas2[index];

    var med = media(notaA, notaB);

    console.log(nomes[index] +
        " - " +
        notaA +
        " - " +
        notaB +
        " - " +
        med +
        " - " +
        passou(med));
}