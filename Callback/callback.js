/*Se eu posso colocar uma funçao dentro de uma variável
e se eu posso passar uma variável como argumento de
uma função. Então eu posso passar uma função como um
argumento de uma função. Callback. Resumindo: passar
como um atributo uma função.*/

/*Fazer algo assíncrono acontecer depois de um determinado
tempo e/ou função ser executada.*/

let users = ["José", "Roberto", "Freitas"];

function addUser(name, callback) {
  setTimeout(() => {
    users.push(name);
    callback();
  }, 2000);
}

function listUsers() {
  console.log(users);
}

addUser("Melo", listUsers);
