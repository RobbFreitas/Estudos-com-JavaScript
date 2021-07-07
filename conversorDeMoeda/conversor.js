// Conversor de moeda. Considerando 1 dólar = 5 reais.
function Convert(dolar = 0, real = 0) {
  this.dolar = dolar;
  this.real = real;
  
  // cTR = Convert To Real
  this.cTR = function () {
    return this.dolar * 5;
  };
  // cTD = Convert To Dolar
  this.cTD = function () {
    return this.dolar / 5;
  };
}
var conversao1 = new Convert(5);
console.log(conversao1.cTR() + " R$");
var converterRealPDolar = new Convert(10);
console.log(converterRealPDolar.cTD() + " $");
