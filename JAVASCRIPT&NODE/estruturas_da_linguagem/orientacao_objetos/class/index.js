let cachorro = {
    patas: 4,
    raca: 'SRD',
    latir: () => {
        console.log('latindo')
    },
}

let labrador = Object.create(cachorro)

labrador.latir()
labrador.raca = 'Labrador'

console.log(labrador)
console.log(cachorro.raca)