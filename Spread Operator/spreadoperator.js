// Utilizando o "..." para manipular objetos


// Utilizando objetos
const person = {
    name: "Robb",
    age: 22
}

const contact = {
    email: "roberto@email.com",
    phone: 35157404
}

const futurePerson = {...person, city: "Pará", ...contact};
futurePerson.age = 23;

// console.log(person);
// console.log(futurePerson);

//Utilizando Arrays
const notes1 = [1, 2, 3];

const notes2 = [4, 5, 6];

const allNotes = [...notes1, ...notes2];

console.log(allNotes);