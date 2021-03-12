function Cachorro(raca, pata, cor) {
    this.raca = raca
    this.pata = pata
    this.cor = cor
}

Cachorro.prototype.uivar = () => {console.log('AUUUU')}

let husky = new Cachorro('york', 2, 'preto')

console.log(husky, husky.uivar())