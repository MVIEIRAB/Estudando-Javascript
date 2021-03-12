async function sum(a, b) {
    return a + b
}

console.log('CONSOLE.lOG isolado: ', sum(2, 5))

sum(2, 4).then(value => console.log('resolve (THEN): ', value))