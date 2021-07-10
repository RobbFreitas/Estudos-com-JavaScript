let aluno = {
    nome: "Roberto",
    nota: 8.5
}

console.log(aluno);

JSON // Representação de um Objeto. Java Script Object Notation
     // Em aluguns momentos a gente vai precisar gravar um OBJ JS
     // em algum lugar, por exemplo, mas a gente não vai poder passar
     // o objeto. A gente vai passar uma Str que representa esse OBJ

// JSON.parse. Pega uma String e tenta transformar num objeto JSON
// JSON.stringify. Pega um objeto JSON e transforma numa String

let stringify = JSON.stringify(aluno);
console.log(stringify); // Exibe o "objeto" agora em forma de string normal

let parse = JSON.parse(stringify);
console.log(parse); // Exibe agora em objeto novamente

let aluno2 = '{"nome": "José", "nota": 7.8}'; // Essa é a notação para se seguir.
let paraAluno2 = JSON.parse(aluno2);
console.log(paraAluno2);
