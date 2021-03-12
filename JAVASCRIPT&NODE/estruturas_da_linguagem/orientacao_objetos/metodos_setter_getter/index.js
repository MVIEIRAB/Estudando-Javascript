class Cachorro {
    constructor(raca, cor) {
        this.raca = raca
        this.cor = cor
    }

    rosnar() {
        console.log('GRRRRRRRRRR')
    }

    get getCor() {
        return this.cor
    }

    set setCor(cor) {
        this.cor = cor
    }
}

let pastor = new Cachorro('Pastor Alemão', 'sem cor')

console.log(pastor.getCor)

pastor.setCor = 'azul'

console.log(pastor.getCor)