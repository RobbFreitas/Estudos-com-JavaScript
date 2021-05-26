// Construtor: Pegar estrutura comum em objetos e colocá-los numa função


function aluno (nome, n1, n2){

    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function(){
        return (this.nota1 + this.nota2) / 2;
    }
}


// sintaxe para definir uma estrutura comum entre objetos no JavaScript
var aluno1 = new aluno("Roberto", 10, 9)
console.log(aluno1);
console.log(aluno1.media());

var aluno2 = new aluno("Joao", 8, 8);
console.log(aluno2);
console.log(aluno2.media());