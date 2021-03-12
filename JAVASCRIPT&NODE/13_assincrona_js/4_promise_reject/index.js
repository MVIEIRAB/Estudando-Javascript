function verificarNum(num) {
    return new Promise((resolve, reject) => {
        if (num == 2) {
            resolve(console.log(`o numero é ${num}`))
        } else {
            reject(console.log(new Error('deu pau')))
        }
    })
}

verificarNum(2)
verificarNum(3)