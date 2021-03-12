class MarketCar {
    constructor(item) {
        this.item = []
    }

    adiciona(add) {
        return this.item.push(add)
    }
    remove(itemLista) {
        const procura = this._procuraElementos(this.item, itemLista, 'nome')
        this.item.splice(procura, 1)
    }
    _procuraElementos(lista, valorProcurado, propriedade) {
        for (var i = 0; i < lista.length; i++) {
            if (lista[i][propriedade] === valorProcurado) return i;
        }
        return -1;
    }
}

let ML = new MarketCar()

// OUTRO METODO DE FAZER ESSE DESAFIO

class Carrinho {
    constructor(itens, qtd, valorTotal) {
        this.item = itens
        this.qtd = qtd
        this.valorTotal = valorTotal
    }
    additem(item) {
        for (let itemCarrinho in this.item) {
            if (this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].qtd += item.qtd
            }
        }

        this.qtd += item.qtd
        this.valorTotal += item.preco * this.qtd
    }
    removeItem(item) {
        for (let itemCarrinho in this.item) {
            if (this.itens[itemCarrinho].id == item.id) {
                let obj = this.itens[itemCarrinho]
                let index = this.itens.findIndex((obj) => {
                    return obj.id == item.id
                })
                this.itens.splice(index, 1)

                this.qtd -= item.qtd
                this.valorTotal -= item.preco * this.qtd
            }
        }
    }
}

let carrinho = new Carrinho([
    {
        id: 01,
        nome: 'camisa',
        qtd: 1,
        preco: 20
    },
    {
        id: 02,
        nome: 'calça',
        qtd: 2,
        preco: 50
    }
], 3, 120)

console.log(carrinho)

carrinho.removeItem({ id: 01, nome: 'Camisa', qtd: 1, preco: 20 })