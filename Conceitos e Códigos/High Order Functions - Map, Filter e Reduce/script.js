/* Map - Quando quiser obter um novo array com a mesma quantidade
de itens do array original. Porém, com cada item transformado.
* Para um Map retornar um novo array. A função precisa sempre
retornar um valor. Essa é uma das diferenças entre o map e o
forEach, já que o forEach não retorna um valor. */

const number = [1, 2, 3];

const squareNumber = number.map((item) => item ** 2);
console.log(squareNumber);

const animeShows = [
  { name: "Attack On Titan", releaseYear: 2013 },
  { name: "Naruto", releaseYear: 2003 },
  { name: "DBZ", releaseYear: 1987 },
];

const showNames = animeShows.map(({ name }) => name);

console.table(showNames);

/* Filter - Recebe uma função como por argumento e executa essa função
pra cada item de um array 
* Quando usar? baseado em uma condição, você quer obter um novo
array com só alguns itens do array original.
includes - Especificar um valor que vai ser buscado no array, e a expressão
vai retornar um boolean indicando se o valor existe ou não no array
 */

const randomNumbers = [37, 101, 38, 64];

const numbersGreaterThan37 = randomNumbers.filter((item) => item > 64);
console.log(numbersGreaterThan37); // 101

const firstTravelers = [
  "Sydney",
  "Berlim",
  "Lisboa",
  "Sofia",
  "Praga",
  "Bali",
  "Florianópolis",
];

const secondTravelers = ["Praga", "Roma", "Chiang Mai", "Lisboa", "Zagreb"];

const commomCities = firstTravelers.filter((city) =>
  secondTravelers.includes(city)
);
console.table(commomCities); // Lisboa, Praga

/* Reduce - High order function, que recebe uma função como argumento e executa
essa função para cada item do array
* Quando usar? quando se quer reduzir o array a algum tipo de dado
 */

const numbers = [1, 2, 3];
const sum = number.reduce((accumulator, item) => accumulator + item, 0);
console.log(sum);