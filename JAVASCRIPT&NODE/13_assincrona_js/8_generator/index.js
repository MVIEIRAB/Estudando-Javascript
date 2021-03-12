function* genTest() {
    let id = 1
    while(true){
        yield id++
    }
}
let criarId = genTest()

pessoa = {
    id: criarId.next().value,
    nome:'matheus',
    sobrenome:'vieira',
    progm:'sim'
}

pessoa2 = {
    id: criarId.next().value,
    nome:'luiz',
    sobrenome:'vieira',
    progm:'sim'
}

pessoa3 = {
    id: criarId.next().value,
    nome:'pedro',
    sobrenome:'vieira',
    progm:'não'
}

pessoa4 = {
    id: criarId.next().value,
    nome:'dinha',
    sobrenome:'vieira',
    progm:'não'
}

console.log(pessoa)
console.log(pessoa2)
console.log(pessoa3)
console.log(pessoa4)