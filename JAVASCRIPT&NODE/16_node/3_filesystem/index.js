const { readFile, writeFile } = require('fs')

readFile('arquivo.txt', 'utf8', (error, data) => {
    const dados = data
    if (error) {
        throw error
    } else {
        console.log(dados)
    }
})

writeFile('arquivo.txt', 'inserir esse texto', (error) => {
    if (error) {
        throw error
    }
})

readFile('.././', 'utf8', (error, data) => {
    const dados = data
    if (error) {
        throw error
    } else {
        console.log(dados)
    }
})