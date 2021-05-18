//Sistema de media com Switch que imprime conceito

var nota1 = parseFloat(prompt("Digite a primeira nota: "));
var nota2 = parseFloat(prompt("Digite a segunda nota: "));

var media = (nota1 + nota2) / 2;

var conceito = "";

// >= 8 Ótimo, >= 6.5 Bom, Regular

if (media >= 8) {

    conceito = "Ótimo"

}
else if (media >= 6.5) {

    conceito = "Bom"
}

else {

    conceito = "Regular"

}

switch (conceito) {
    
    case "Ótimo":
        console.log("Parabéns, você é um ótimo aluno");
        break
    case "Bom":
        console.log("Você está quase lá");
        break
    case "Regular":
        console.log("Estude mais um pouco");
        break
}

alert("Sua nota foi: " + media + " " + "Conceito: " + conceito);