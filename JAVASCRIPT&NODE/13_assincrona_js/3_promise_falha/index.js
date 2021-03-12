let p = Promise.resolve(new Error('não deu certo!'))

console.log('lalala')

p.then(value => console.log(value))
    .catch(reason => { console.log('falhou' + reason) })