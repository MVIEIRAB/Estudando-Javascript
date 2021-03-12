function detect (data) {

    switch (typeof data) {
        case 'number':
            return 'number'
        case 'string':
            return 'string'
        case 'boolean':
            return 'boolean'
        default:
            return 'passa alguma coisa ai seu arrombado'
    }
    
    // if (typeof data === 'number'){
    //     return 'Isso é um Number!'
    // } else if (typeof data === 'string') {
    //     return 'Isso é um tipo string!'
    // } else if (typeof data === 'boolean') {
    //     return 'Esse é um booleano'
    // }
}

console.log(detect())