function soma(a, b){

    return a + b;

}

console.log(soma(2, 5));


// Com Arrow Funtion
let subtrair = (x, y) => x - y;

console.log(subtrair(10, 5)); 

// Vantagens de usar Arrow Function 
// Código + limpo e simples
// Desvantagem: Não interage bem com o This. 
// Pois, reconhece o escopo global