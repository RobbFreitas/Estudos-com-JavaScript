// // No JavaScript senão declararmos Var, ele o atribui mesmo assim.

// // x = 7; // Mesma coisa

// var x = 7;

// console.log(x);
// console.log(window);

// "use strict"; - Faz com que seja obrigatório declarar toda variável que vc usa

function imprimir2(){

    var z = 2;
    console.log(z) // Não aparece z = 2 no window pq foi declarada dentro do bloco
}

function imprimir1(){

     y = 2;
    console.log(y);
}

imprimir1();
imprimir2();
console.log(window); // Aparece o Y = 2 no Window  
