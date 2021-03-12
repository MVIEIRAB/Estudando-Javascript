class Bank {
    constructor(saldo) {
        this.saldo = saldo
    }

    adiciona(dep) {
        return this.saldo += dep
    }

    saque(saq) {
        return this.saldo -= saq
    }
}

let matheus = new Bank(5000)

matheus.adiciona(1000)
console.log('saldo após depósito: ', matheus.saldo)

matheus.saque(600)
console.log('saldo atual após o saque: ', matheus.saldo)