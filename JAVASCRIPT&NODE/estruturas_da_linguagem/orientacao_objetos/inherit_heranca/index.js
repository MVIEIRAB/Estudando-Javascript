class Carro {
    constructor() {
        this.estoque = []
        this.vendas = []
    }

    cadastrar(data) {
        this.estoque.push(data)
    }
    
    _procuraElementos(lista, valorProcurado, propriedade) {
        for (var i = 0; i < lista.length; i++) {
            if (lista[i][propriedade] === valorProcurado) return i;
        }
        return -1;
    }

    procuraInfoCarro(nomeCarro) {
        for (let i = 0; i < this.estoque.length; i++) {
            if (this.estoque[i]['nome'] == nomeCarro) {
                return this.estoque[i]
            }
        }
    }

    excluir(carro) {
        const indice = this._procuraElementos(this.estoque, carro, 'nome')
        this.estoque.splice(indice, 1)
    }

    listarEstoque() {
        console.log('lista estoque: ', this.estoque)
    }

    vender(carro) {
        if (this.procuraInfoCarro(carro)) {
            this.vendas.push(this.procuraInfoCarro(carro))
            this.excluir(carro)
        } else {
            throw new Error('Carro não encontrado!')
        }
    }

    somarVendas() {
        let soma = 0
        for (const carros of this.vendas) {
            soma = soma + carros['preco']
        }
        console.log(soma)
    }

    listarVendas() {
        console.log('lista vendas: ', this.vendas)
    }
}

const carro = new Carro()

carro.cadastrar({ nome: 'hb20', preco: 2500 })
carro.cadastrar({ nome: 'peogeot', preco: 254500 })
carro.cadastrar({ nome: 'fox', preco: 552500 })
carro.cadastrar({ nome: 'megane', preco: 552500 })
carro.cadastrar({ nome: 'ferrari com escada em cima', preco: 90000 })

carro.vender('ferrari com escada em cima')
carro.vender('hb20')
carro.vender('fox')
carro.somarVendas()