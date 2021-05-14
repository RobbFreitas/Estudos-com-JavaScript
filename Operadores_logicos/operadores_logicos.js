// && e
// || ou
// ! Negativo
// Nota: Lembrar das aulas de Lógica Computacional.

var a = true;
var b = false;

// && e
var c = a && b; // Basta uma ser falsa para o resultado ser falso
console.log(c); // False

// || ou
var d = a || b; // Ambas precisam ser falsas para o resultado ser falso
console.log(d); // True

// ! Negação

var idade = 15;

var maior20 = idade >= 20;
var menor20 = !maior20;

console.log("maior que vinte", maior20);
console.log("menor que vinte", menor20);

