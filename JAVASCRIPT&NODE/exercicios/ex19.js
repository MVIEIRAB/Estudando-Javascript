function auto(idade) {
    if (idade >= 18) {
        return 'Você pode entrar na Auto Escola'
    } else {
        return 'Você não tem idade para fazer Auto Escola'
    }
}

console.log(auto(17))
console.log(auto(18))
console.log(auto(80))
console.log(auto(21))
