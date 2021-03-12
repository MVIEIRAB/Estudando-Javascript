// Destructuring com objetos, podemos definir variáveis com propriedades do 
// ex: const {aqui dentro vai ficar separado por virgula as propriedades e vamos defirnir uma variavel atraves do valor da chave, depois dos dois pontos}
// objeto com uma notação diferente, chamada DESTRUCTURING.

const obj = {
    rodas: 4,
    portas: 4,
    tetosolar: true,
    motor: '2.0'
}

const { rodas: vRodas, portas: vPortas, tetosolar: vtetoSolar, motor: vMotor } = obj

console.log('Rodas', vRodas)
console.log('Portas', vPortas)
console.log('Tetosolar', vtetoSolar)
console.log('Motor', vMotor)