let nomes = ['matheus', 'maria', 'jose']
var i = 0

for (let i = 0; i <= nomes.length; i++) {
    console.log(nomes[i])
}

while (nomes[i]) {
    if (i <= nomes.length) {
        i++
        console.log(nomes[i])
    }
}

// o for vai iterar indice por indice até o comprimento final contido dentro de um array, no final printe com console
// o array que deseja aprensetar passando o colchete, a varialvel que está iterando no loop (i)