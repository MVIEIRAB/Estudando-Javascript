// DÉCIMA PRIMEIRA AULA (ALTURA E LARGURA)
/*
    CHECA O TAMANHO E LARGURA DE UM ELEMENTO, OS DOIS METODOS CHECA OS TAMANHOS O OFFSET CHECA O TAMANHO
    JUNTO A BORDA. O CLIENTWIDTH OU HEIGTH CHECA O TAMANHO NAO CONSIDERANDO AS BORDAS.
*/

let elemento = document.querySelector('#titulo-principal')

console.log('largura: ', elemento.offsetWidth) // considera as bordas
console.log('altura ', elemento.offsetHeight)

console.log('largura: ', elemento.clientWidth) // nao considera as bordas
console.log('altura ', elemento.clientHeight)
