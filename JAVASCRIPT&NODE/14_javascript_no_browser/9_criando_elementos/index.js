// NONA AULA (CRIANDO ELEMENTOS)
/*
    PRIMEIRO FOI INSTANCIADO UMA UL (LISTA SEMANTICA), DEPOIS DENTRO DO FOR ELE SE REPETIU O PROCESSO ATÉ
    ADICIONAR A QUANTIDADE DE ITENS DESEJADA.
    USANDO O APPENDCHILD TODO FINAL DE ITERAÇÃO, DEPOIS USAMOS O ELEMENTO PAI, PARA ADICIONAR O RESULTADO FINAL
    DESSA ITERAÇÃO FORMANDO UMA LISTA, COM 5 ITENS!
*/

lista = document.createElement('ul')

for (let i = 1; i <= 5; i++) {
    let item = document.createElement('li')

    let texto = document.createTextNode('Lista criada dentro do Container Principal ' + i)

    item.appendChild(texto)

    lista.appendChild(item)
}

let container = document.getElementById('container-principal')

container.appendChild(lista)

console.log(lista)