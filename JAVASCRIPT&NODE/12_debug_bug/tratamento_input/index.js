function checkNum(value) {
    let resultado = Number(value)
    if (Number.isNaN(resultado)) {
        throw new Error('Wrong value, only number here.')
    } else {
        return resultado
    }
}

console.log(checkNum(4))