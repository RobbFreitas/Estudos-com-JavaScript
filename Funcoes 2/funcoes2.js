function saudacao(){
    console.log("Olá Mundo!");
}
saudacao(); // Imprimi "Olá Mundo"

var saud = saudacao;
console.log(saud); // Imprimi a Função. Pois no JavaScript uma função pode ser uma variável (What? rsrs)

// Criando uma Função Anônima

var media = function(n1, n2){

    return media = (n1 + n2) / 2
}

console.log(media(10,8)); // 9