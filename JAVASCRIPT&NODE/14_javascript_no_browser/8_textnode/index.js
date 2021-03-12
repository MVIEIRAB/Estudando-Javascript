// OITAVA AULA (TEXTNODE)
/*
    ATRIBUINDO UM TEXTO A UM ELEMENTO ATRAVÉS DO GETELEMENTBYID, USANDO APPENDCHILD.
*/

let pSemTexto = document.getElementById('sem-text')

texto = document.createTextNode('este texto inserido')

pSemTexto.appendChild(texto)
console.log(pSemTexto)