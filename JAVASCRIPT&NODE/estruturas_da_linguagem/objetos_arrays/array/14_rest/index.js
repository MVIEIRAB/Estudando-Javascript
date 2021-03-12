// uma forma de uma função receber indefinidos parametros
// o operador rest vai virar um array (os valores serão convertidos para um ARRAY, independente da operação ou o valor colocado)
// o parametro é definido por: "..." seguido pelo nome de uma variavel: nome.


let num = 1
let num1 = 5
let num2 = 3
let num3 = 2


function impNum(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i])
    }
}

console.log(impNum(num,num2,num3))
console.log('pausa')
console.log(impNum(num2,num1,num3,))
console.log('pausa')
console.log(impNum(2,5,7,5,1,6,4,9,10,85,25))