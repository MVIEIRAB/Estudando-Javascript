obj = {
    saudacao: 'BOM DIA MEOO',
    funcao: () => {return obj.saudacao}
}

console.log(obj.funcao())

// metodo é uma função que funciona como propriedade de um objeto que executa alguma ação, quando chamada