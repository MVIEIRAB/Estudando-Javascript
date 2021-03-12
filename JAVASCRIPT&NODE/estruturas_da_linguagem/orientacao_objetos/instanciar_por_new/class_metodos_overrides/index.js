class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca
        this.cor = cor
    }
}
        // o prototype vai patronizar o objeto pai, ou seja a função da qual você usa pra criar outras funções ou objetos.
        Cachorro.prototype.patas = 4


let dober = new Cachorro('doberman', 'branco')

console.log(dober.patas)