function mult (x,y,z) {
    return x * y * z
}
console.log(mult(5,8,1))


const multi = mult(5,8,7)

console.log(multi)

function autoA(idade, cnh) {
    if (idade >= 18 && cnh == 'sim') {
        return 'Você pode dirigir!'
    } else if (idade >= 18 && cnh == 'não'){
        return 'não pode dirigir!'
    } else {console.log('você nao pdoe dirigir')}
}


console.log(autoA(18,'sim'))