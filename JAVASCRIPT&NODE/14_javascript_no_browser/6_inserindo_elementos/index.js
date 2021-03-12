// SEXTA AULA (INSERINDO ELEMENTO)
/*
    adicionando um elemento dentro de uma especifica tag através do 'appendChild'
    declarando algumas instancias para acessarmos o pai dos elementos onde sera adicionado.
    propriedade para idenficiar o PAI é a 'parentNode'
*/

let novoElemento = document.createElement('p')
let texto = document.createTextNode('Algum texto aleatorio')

novoElemento.appendChild(texto)

let p = document.querySelector('#paragrafo-principal')
let pai = p.parentNode

pai.appendChild(novoElemento)
