let p = document.getElementById("p1");

p.innerHTML = "Novo conteúdo inserido aqui";

// O innerHTML insere o HTML, então se por <h1><h1>, ele irá compreender a linguagem
// os outros não. Eles irão exibir o <h1><h1> na tela como se fizesse parte da String

p.innerText = "Conteúdo mais novo"; // Exibe "conteúdo mais novo"
// Exibe apenas o que está na tela

p.textContent = "Conteúdo mais novo ainda"; // Exibe "Conteúdo mais novo ainda"
// Exibe o que está no HTML
// ps: códigos executados em ordem. Então a última msg a ser exibida será a do útimo código

p.className = ""; // Passado um conteúdo vazio (""). O conteúdo perde até a estilização (cor)
                  // Posso modificar um atributo dessa maneira