// o JSON é uma estrutura de dados como se fosse um objeto porem se escreve quase igual porem chaves e no valor é obrigado usar as aspas, os valores podem
// ser acessados, funcionam como estrutura de comunicação entre aplicações BACK E FRONT END.
// são escritos em um arquvio com final .json, se inicia com {} se escreve tudo dentro dessas chaves.

let pessoa = {
    "nome":"matheus",
    "idade":"21",
    "sobrenome":"vieira"
}

console.log('seu nome é', pessoa.nome, 'você tem,',pessoa.idade, 'seu sobrenome é', pessoa.sobrenome + '.')
