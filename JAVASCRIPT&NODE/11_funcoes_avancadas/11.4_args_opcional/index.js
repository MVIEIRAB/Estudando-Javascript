function soma(a,b){
    if (a === undefined || b === undefined) {
        console.log('Esta função precisa de dois argumentos')
    } else {
        return a + b
    }
}

console.log(soma(1))
console.log(soma(1,2))

function saudacao(nome, idade) {
    if (idade === undefined) {
        console.log(`olá, ${nome}`)
    } else {console.log(`olá ${nome}, você tem ${idade} anos de idade.`)}
}

saudacao("matheus", 21)

// função com parametro default

function potencia (base, exp=2) {
    return Math.pow(base,exp)
}

console.log(potencia(2))
console.log(potencia(2,2))
console.log(potencia(2,3))