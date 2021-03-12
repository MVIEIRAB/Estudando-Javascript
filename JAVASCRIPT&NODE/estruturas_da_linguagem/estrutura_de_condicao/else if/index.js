const nome = 'matheus'

if (nome != undefined && nome == 'joaquim') {
    console.log('Nome esta definido')
} else if (nome == 'matheus' && nome.length > 5) {
    console.log('o nome é matheus')
} else {
    console.log('não é matheus')
}

if (1 > 2) {
    console.log('Teste')
} else if (1 == 1) {
    console.log('Testando')
}

let nomeAluno = 'Matheus'
let notaAluno = 0

if (nomeAluno == 'Matheus' && notaAluno >= 7 && notaAluno <= 10) {
    console.log('Parabéns, passou')
} else if (nomeAluno == 'Matheus' && notaAluno >= 4 && notaAluno < 7) {
    console.log('Você está em recuperação')
} else if (nomeAluno == 'Matheus' && notaAluno < 4 && notaAluno == 0) {
    console.log('Você reprovou!')
} else {
    console.log('Nome ou Nota do Aluno não batem com as informações do banco de dados, corrija os inputs')
}