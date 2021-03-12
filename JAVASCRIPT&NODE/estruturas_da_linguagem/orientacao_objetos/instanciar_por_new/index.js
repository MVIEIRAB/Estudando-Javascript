function Cachorro(raca, pata, cor) {
    this.raca = raca
    this.pata = pata
    this.cor = cor
    this.uivar = () => { console.log('AUUUUUUUUUUUUUUUUUUU!') }
}

let husky = new Cachorro('york', 2, 'dourado')
console.log(husky)
husky.uivar()