//  =   x = y   x = y
// +=   x += y  x = x + y
// -=   x -= y  x = x - y
// *=   x *= y  x = x * y
// /=   x /= y   x = x / y
// %=   x %/ y  x = x & y

var a = 4;
var b = 4;
var c = 4;
var d = 4;
var e = 4;
var f = 4;

a += 1; // x = x + 1
console.log(a); // 5

b -= 1 // x = x - 1 
console.log(b) // 3

c *= 2 // x = x * y
console.log(c); // 8

d /= 2 // x = x / y
console.log(d); // 2

e %= 3 // x = x % 3
console.log(e); // 1
