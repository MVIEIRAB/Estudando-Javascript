// SLICE vai retornar por posição / indice o conteudo de um array, o primeiro parametro ira retornar tudo que 
// vier depois de um numero X ex: arr.slice(4) se houver 10 itens no array retornará [4,6,7,8,9]
// se enviar dois parametros ira vir o primeiro numero até o segundo ex: arr.slice(4,8), ira retornar [4,5,6,7,8]

// se nos parametros digitar um numero negativo começara de trás pra frente.

let arr = [1,2,3,4,5,1,6,2,3,5]

console.log(arr.slice(-2))