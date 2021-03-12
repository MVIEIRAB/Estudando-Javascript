function criarCachorro(raca, patas, cor) {
    let cachorro = Object.create({})
    cachorro.raca = raca
    cachorro.patas = patas
    cachorro.cor = cor

    return cachorro
}

let mike = criarCachorro('york', 3, 'dourado')

console.log(mike)