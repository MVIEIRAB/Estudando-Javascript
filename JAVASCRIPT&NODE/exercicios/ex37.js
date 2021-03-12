class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }

    set novaRua(novaRua){
        this.rua = novaRua
    }
    set novoBairro(novaBairro){
        this.bairro = novaBairro
    }
    set novaCidade(novoCidade){
        this.cidade = novoCidade
    }
    set novaEstado(novaEstado){
        this.estado = novaEstado
    }
}

let endereco1 = new Endereco('manoel moreira', 'jd do tiro', 'sao paulo', 'sp')

console.log(endereco1)

endereco1.novaRua = 'rui apocal'
endereco1.novoBairro = 'hookabar'
endereco1.novaCidade = 'sorocaba'

console.log(endereco1)