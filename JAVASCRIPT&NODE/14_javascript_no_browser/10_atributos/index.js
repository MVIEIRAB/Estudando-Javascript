// DÉCIMA AULA (ATRIBUTO)
/*
    ALTERANDO ATRIBUTOS DE UM ELEMENTO, USANDO EXEMPLO DE UMA TAG QUE REFERENCIA PARA OUTRO SITE
    ATRAVÉS DO SETATTRIBUTE E GETATTRIBUTE, MUDANDO SOMENTE PROPRIEDADE OU ATRIBUTO DO ELEMENTO.
*/

let a = document.querySelector('footer a')

console.log(a.getAttribute('href'))

let link = 'https://google.com'

a.setAttribute('href', link)

console.log(a)