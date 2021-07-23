let users = ["José", "Roberto", "Freitas"];

function addUser(name) {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      users.push(name);
      let error = false;

      if (!error) {
        resolve();
      } else {
        reject({ msg: "Erro 40332" });
      }
    }, 2000);
  });

  return promise;
}

function listUsers() {
  console.log(users);
}

async function execute() {
  await addUser("Melo");
  listUsers();
}

execute(); // let users = ["José", "Roberto", "Freitas"];
