/* Atribuição por valor: faz uma cópia do elemento original,
e qualquer alteração na cópia não vai refletir no original.

Atribuição por referência: não faz uma cópia, é como se
desse um novo apelido para o objeto original. Qualquer
modificação no novo elemento também altera o original. */

/* No JavaScript, quando a gente coloca um objeto dentro
do outro, ele vai como referência. Entretanto, quando a gente
atribui uma variável a outra mas essa variável tem um tipo
primitivo(num, str, boolean...), essa atribuição é feita por
valor, e não a referência */

let turmaA = ["José", "Roberto", "Freitas"];
let turmaB = [...turmaA];

turmaB.push("Melo");
console.log("Essa é a turma B (array modificado): ", turmaB);
console.log("Esse é o Array original: ", turmaA);

let alunoA = {
  nome: "Roberto",
  idade: 15,
};

/* Para Objetos. Poderia ser "...alunoA" no lugar do
   Object.assign({}, alunoA. Assim: { ...alunoA} */

let alunoB = Object.assign({}, alunoA);

alunoB.idade = 25;
console.log("Aluno A (array original): ", alunoA);
console.log("Aluno B (array modificado): ", alunoB);
