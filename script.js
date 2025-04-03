let titulo = document.getElementById("titulo");
console.log("Exibindo por ID:", titulo);

titulo.style.color = "blue"; 

const lista = document.querySelector("ul"); 

// adicionar esporte na lista

let listaSport = document.getElementById("esportes");

let novoEsporte1 = document.createElement("li"); 
novoEsporte1.textContent = "Tênis"; 

listaSport.appendChild(novoEsporte1);

let novoEsporte2 = document.createElement("li"); 
novoEsporte2.textContent = "Musculação"; 

listaSport.appendChild(novoEsporte2);

let novoEsporte3 = document.createElement("li"); 
novoEsporte3.textContent = "Beach Tennis"; 

listaSport.appendChild(novoEsporte3);


// let esportes = document.getElementById("esportes")

// let esportesPorClasse = document.getElementsByClassName("esporte");
// console.log("Exibindo por Classe:", esportesPorClasse);

// let esportesPorTag = document.getElementsByTagName("li");
// console.log("Exibindo por Tag:", esportesPorTag);

// let primeiroEsporte = document.querySelector(".esporte");
// console.log("Exibindo com querySelector:", primeiroEsporte);

// let todosEsportes = document.querySelectorAll(".esporte");
// console.log("Exibindo com querySelectorAll:", todosEsportes);
