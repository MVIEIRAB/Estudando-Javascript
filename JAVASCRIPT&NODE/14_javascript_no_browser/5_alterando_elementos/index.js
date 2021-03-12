// QUINTA AULA (ALTERANDO HTML)
/*
    CRIANDO UM ELEMENTO COM O INSERTBEFORE ADICIONARA LOGO DEPOIS DE OUTRO ELEMENTO DA DOM ELE ADICIONA UMA ELEMENTO ANTES DE
    QUALQUER OUTRO.

    APPENDCHILD: ADICIONA ALGUM VALOR A UM ELEMENTO.
*/

let novoElemento = document.createElement('p')
let elementoAlvo = document.querySelector('#titulo-principal')
let elementoPai = document.querySelector('#container-principal')

elementoPai.insertBefore(novoElemento,elementoAlvo)

let text = document.createTextNode('luizinhogayy')

novoElemento.appendChild(text)

console.log(novoElemento)