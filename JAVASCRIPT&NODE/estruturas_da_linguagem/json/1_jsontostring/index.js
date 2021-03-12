//existem também conversões que pdoemos fazer com json para uma string ou vice e versa usando METODOS

pessoa = {
    "nome":"matheus",
    "sobrenome":"vieira",
    "hobbies": ["video game","leitura","correr"]
}
const pessoa2 = {
    nome:'matheus',
    sobrenome: 'vieira'
}

let json = JSON.stringify(pessoa)
console.log(json)

console.log(pessoa.hobbies[2])