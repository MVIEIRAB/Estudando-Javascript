function saudacao(nome) {
    if (typeof nome != 'string') { throw new Error('digite um nome') }
    else {
        return nome
    }
}

console.log(saudacao('matheus'))
console.log(saudacao(2))