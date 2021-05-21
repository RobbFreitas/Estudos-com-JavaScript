
// Cada elemento do Array deve ser separado por vírgula
// nesse exemplo é uma str mas poderia ser outro tipo
// ou até mesmo uma variável, outro array ou objeto

var alunos = new Array("José", "Maria", "João");

console.log(alunos)
console.log(alunos[0]) // Imprimi "José"
console.log(alunos.length) // 3

var ListaDeAlunos = new Array("Mateus", "Marcos", "Lucas", "João", "Paulo")

for (var i = 0; i < ListaDeAlunos.length; i++) {
    console.log(ListaDeAlunos[i]); // Vai imprimir todos os elementos no Array.
}

// Outra maneira de usar For com Array
var ListaDeAlunos2 = new Array("Isaias", "Daniel", "Moisés")
for (var i in ListaDeAlunos2){
    console.log(ListaDeAlunos2[i]) // Vai imprimir novamente todos os elementos no Array
}

// Usando o for com "of" (vai pegar o elemento daquele índice)

var ListaDeAlunos3 = new Array("Sebastião", "Igor", "Maria")
for (var ListaDeAlunos3 of ListaDeAlunos3){
    console.log(ListaDeAlunos3)
}