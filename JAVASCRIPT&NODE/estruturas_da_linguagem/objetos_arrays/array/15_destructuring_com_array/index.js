// Destructuring com ARRAY, podemos definir variáveis com propriedades do objeto
// ex: const [aqui dentro vai ficar separado por virgula as propriedades e vamos defirnir uma variavel atraves do valor da chave, depois dos dois pontos]
// objeto com uma notação diferente, chamada DESTRUCTURING.

// RESUMO: iremos conseguir criar varias variaveis de uma variavel, por isso o ato de desestruturar algo e didivir em quantas vezes quisermos ver
// as variaveis terão o mesmo valor da variavel desestruturada.


const destruct = [2, 3, 6, 1]

const [num1, num2, num3, num4] = destruct

console.log('primeiro numero ', num1)
console.log('segundo numero ', num2)
console.log('terceiro numero ', num3)
console.log('quarto numero ', num4)