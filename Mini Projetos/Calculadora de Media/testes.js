// Inserir nome, notas e exibir media com resultado Aprovado ou Reprovado

function aluno(nome, n1 = 0, n2 = 0){
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.calcularMedia = function(){
        return (this.nota1 + this.nota2)/2;
    }

    this.condicaoNota = function(){
        if((n1 + n2) / 2 >= 7){
        return "Aprovado"
        } else {
        return "Reprovado"
        }
    }
    }



var aluno1 = new aluno("Roberto", 10, 4 );
console.log(aluno1.calcularMedia());
console.log(aluno1.condicaoNota())
