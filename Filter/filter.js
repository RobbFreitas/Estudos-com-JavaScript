/*O método filter() cria um novo array com todos os elementos
 que passaram no teste implementado pela função fornecida.*/

function newStudent(name, age) {
  return { name, age };
}

let students = [
  newStudent("Roberto", 23),
  newStudent("Freitas", 45),
  newStudent("José", 29),
  newStudent("Melo", 35),
];

let players = [
  newStudent("Michael", 23),
  newStudent("John", 45),
  newStudent("Thomas", 29),
  newStudent("Aaron", 35),
];

function isUnder30(student) {
  return student.age < 30;
}

function isOver30(student) {
  return student.age > 30;
}

console.log(players.filter(isOver30));
