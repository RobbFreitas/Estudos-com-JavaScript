/* Programa que calcula o volume de piscinas
utilizando o conceito de Orientação a Objetos */

class Piscina {
    constructor (nome, altura, largura, profundidade) {
        this.nome = nome;
        this.altura = altura;
        this.largura = largura;
        this.profundidade = profundidade;
    }

    //Getter
    volume() {
        return this.calcularVolume();
    }

    calcularVolume() {
        return this.altura * this.largura * this.profundidade;
    }
}

const piscinaAzul = new Piscina("Piscina Azul", 10, 10, 10);
console.log(`A ${piscinaAzul.nome} ${piscinaAzul.volume()} m^3`);
