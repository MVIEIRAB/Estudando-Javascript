// DÉCIMA TERCEIRA AULA (ESTILIZANDO COM CSS)
/*

*/

let elemento = document.querySelector('#titulo-principal')

elemento.style.color = 'blue'

setTimeout(() => {
    elemento.style.color = 'orange'
}, 3000)

setTimeout(() => {
    elemento.style.color = 'red'
}, 6000)