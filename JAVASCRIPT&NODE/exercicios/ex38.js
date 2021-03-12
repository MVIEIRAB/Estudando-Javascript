class Carro {
    constructor(marca, cor, gasolinaRestante, consumo) {
        this.carro = marca
        this.cor = cor
        this.gasolinaRestante = gasolinaRestante
        this.consumo = consumo
    }

    driveCar(km) {
        let litrosConsumidos = Math.round(km / this.consumo)

        this.gasolinaRestante -= litrosConsumidos
    }

    supplyCar(l){
        this.gasolinaRestante += l
    }
}


carro = new Carro('VW', 'Cinza', 100, 14)

console.log(carro)

carro.driveCar(100)
console.log(carro)

carro.supplyCar(250)
console.log(carro)
