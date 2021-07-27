function newStudent(name, age) {
  return { name, age };
}

let students = [
  newStudent("Roberto", 23),
  newStudent("Freitas", 45),
  newStudent("José", 29),
  newStudent("Melo", 35),
];

/* O que o map vai fazer? vai chamar essa função pra cada uma das entradas,
  ou seja, pra cada um dos estudantes. E vai retornar um novo Array que invés de ter
  os estudantes com suas idades, vai ter a frase do return pra cada um dos estudantes*/
function nameAge(student) {
  return student.name + " tem " + student.age + " anos";
}

console.log(students.map(nameAge)); // 4) ["Roberto tem 23 anos", "Freitas tem 45 anos", "José tem 29 anos", "Melo tem 35 anos"]
console.log(students); //Objeto original não modificado