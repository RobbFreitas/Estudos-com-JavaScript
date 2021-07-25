/* Reduce: vai reduzir todas as entradas de um array
numa única entrada, e essa entrada pode ser um somatorio
ou uma média por exemplo. Pode ser o que vc quiser que seja,
vai depender do que a função faz */

//Até aqui vemos os métodos de array: map, filter e reduce

function newStudent(name, age) {
    return { name, age}
}

let students = [
    newStudent("José", 23),
    newStudent("Roberto", 45),
    newStudent("Freitas", 29),
    newStudent("Melo", 35)
]

function ageClass(total, student) {
    return total + student.age
}

console.log(students.reduce(ageClass, 0));
