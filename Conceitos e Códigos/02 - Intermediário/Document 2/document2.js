let p1 = document.getElementById("p1"); 
console.log(p1); // Exibe: <p class="paragrafo" id="p1"> Parágrafo1</p>

// Todos os elementos da classe parágrafo

let paragrafos = document.getElementsByClassName("paragrafo");
console.log(paragrafos); // HTMLCollection(2) [p#p1.paragrafo, p.paragrafo, p1: p#p1.paragrafo]
                        // 0: p#p1.paragrafo
                        // 1: p.paragrafo
                        // length: 2
                        // p1: p#p1.paragrafo
                        // __proto__: HTMLCollection

// Como pegar todos
let th = document.getElementsByTagName("h1")
console.log(th) // HTMLCollection [h1]
                // 0: h1
                // length: 1
                // __proto__: HTMLCollection
