let nome = 'joao'

switch (nome) {
    case 'matheus':
        console.log('o nome é matheus')
        break
    case 'joao':
        console.log('o nome é joao')
        break
    default:
        console.log('user not found')
        break
}

// por convenção o IF é mais utilizado e bem mais prático/funcional

if (nome == 'matheus') {
    console.log('matheus')
} else if (nome == 'joao') {
    console.log('usuario é joao')
} else {
    console.log('usuario nao encontrado')
}