var aluno = {
    matricula: 1234,
    nome: "Marcos",
    telefone: 9399999999,
    cidade: "Barra"
}


// Desse jeito estou pegando apenas os atributos referenciados
var { matricula, nome } = aluno;

console.log(matricula); // 1234
console.log(nome); // "Marcos"


// Fazendo uma cópia do objeto original sem alterá-lo
var { ...copia} = aluno;

copia.matricula = 4321;
console.log(copia);
console.log(aluno);

// var { nome, ...copia} = aluno; - Assim não mostra o "nome"

const { matricula, nome, ...resto} = aluno;
console.log(resto) // Mostra todo o resto que não é a Matrícula e Nome do obj

// Utilizando Arrays

var cachorro = {
    id: 1234,
    nome: "rex",
    idade: 5,
    cidade: "Barra"
}

var cachorro2 = {
    id: 4321,
    nome: "totó",
    idade: 7,
    cidade: "Barra"
}

var cachorros = [ cachorro, cachorro2 ];

// No Array o que identifica o dado é sua posição. No obj, propriedade
var [ totó, rex ] = cachorros;
console.log(rex); // Imprimi o totó