let titulo = document.getElementById("titulo");
console.log("Exibindo por ID:", titulo);

titulo.style.color = "orange"; 

const lista = document.querySelector("ul"); 

// adicionar esporte na lista

let novoEsporte = document.createElement("li"); 
novoEsporte.textContent = "Tênis"; 
novoEsporte.classList.add("esporte"); 

lista.appendChild(novoEsporte);


let esportesPorClasse = document.getElementsByClassName("esporte");
console.log("Exibindo por Classe:", esportesPorClasse);

let esportesPorTag = document.getElementsByTagName("li");
console.log("Exibindo por Tag:", esportesPorTag);

let primeiroEsporte = document.querySelector(".esporte");
console.log("Exibindo com querySelector:", primeiroEsporte);

let todosEsportes = document.querySelectorAll(".esporte");
console.log("Exibindo com querySelectorAll:", todosEsportes);
