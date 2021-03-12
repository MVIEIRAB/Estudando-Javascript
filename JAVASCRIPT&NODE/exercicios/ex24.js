function dec(n) {
    for (let i = n; i >= 0; i--) {
        if (i % 2 == 0) {
            console.log('esse cara é par:   ' + i)
            if (i === 48) {
                console.log('achei o numero que eu queria', i)
            }
        } else {
            console.log('esse cara é impar: ' + i)
        }
    }
    return 'acabo'
}

console.log(dec(100))