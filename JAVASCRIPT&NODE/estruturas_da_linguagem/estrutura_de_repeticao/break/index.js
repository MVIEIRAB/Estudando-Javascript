let nome = 'Matheus'

for (let i = 0; i < 10; i = i + 1) {
    if (i == 3) {
        nome = 'João'
        console.log(nome)
        break
    }

    if (i == 5 && nome == 'João') {
        console.log("o Nome João, pode parar")
    }

    console.log(i)
}