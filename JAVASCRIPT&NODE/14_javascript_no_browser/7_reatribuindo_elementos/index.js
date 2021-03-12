// SÉTIMA AULA (REATRIBUINDO UM VALOR A UM ELEMENTO)
/*
    repõe um elemento do DOM, com um novo, através do 'replaceChild()'
    previamente capturando os valores em variáveis.
*/

let novoElemento = document.createElement('p')
let texto = document.createTextNode('Algum texto aleatorio')

novoElemento.appendChild(texto)

let heading = document.querySelector('#titulo-principal')
let paiHeading = heading.parentNode

paiHeading.replaceChild(novoElemento, heading)