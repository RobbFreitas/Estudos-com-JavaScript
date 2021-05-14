var a = "3";
var b = "3";

var oper = parseInt(a) + parseInt(b); // Transformando a String em Inteiro
console.log(oper) // 6 e não "33"

var oper2 = a + b;
console.log(oper2); // 33

var c = "5";
var d = "2.5";
console.log(parseInt(c) + parseFloat(d)); // 7.5