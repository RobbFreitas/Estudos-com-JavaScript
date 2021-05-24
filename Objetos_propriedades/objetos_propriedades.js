var aluno = { 
    nome: "João", 
    nota1: [7.5, 5.0]
};

console.log(aluno.nome); // João
console.log(aluno["nome"]); // João
console.log(aluno.nota1); // 7.5
console.log(aluno.nota1[0])

aluno.matricula = 54321;
aluno["sobrenome"] = "Freitas"
var novaProp = "LastName"
aluno[novaProp] = "Melo"
console.log(aluno);

var aluno2 = new Object; // Outra maneira de representar um objeto

aluno2.name = "John";
aluno2.number = [12345];

console.log(aluno2);
