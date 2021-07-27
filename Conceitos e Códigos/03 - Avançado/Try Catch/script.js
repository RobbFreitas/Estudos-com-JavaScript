/* As declarações try...catch marcam um bloco de declarações
 para testar (try),  e especifica uma resposta, caso uma exceção
 seja lançada.*/

let nome = "";

try {
  if (nome == "") {
    throw "Nome não pode ser vazio";
  }
  console.log(nome);
} catch (error) {
  console.log("houve um erro!", error);
}

console.log("Boa tarde!");
