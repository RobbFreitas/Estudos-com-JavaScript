function calcMedia(){
    return (this.notas[0] + this.notas[1]) / 2;
}

var aluno = {
    nome: "Roberto",
    notas: [9, 8],
    media: calcMedia
}

var aluno2 = {
    nome: "José",
    notas: [5,8],
    media: calcMedia
}

console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno2.nome);
console.log(aluno2.media());
