class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca
        this.patas
        this.cor = cor
    }
    latir() {
        console.log('AUAUAUUAUAUAU!')
    }
}

let patas = Symbol()

Cachorro.prototype[patas] = 4 

let labrador = new Cachorro('Labrador', 'Amarelo')

//acessando symbol
console.log(Cachorro.prototype[patas])
console.log(labrador[patas])