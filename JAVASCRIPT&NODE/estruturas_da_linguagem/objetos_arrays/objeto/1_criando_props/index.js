let pessoa = {
    nome: 'matheus',
    idade: 21,
    profissao: 'bandido',
    sai: () => {
      return pessoa.idade = null
    }
}

console.log()

delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

pessoa.casado - false

console.log(pessoa)

console.log(pessoa.sai())
console.log(pessoa)