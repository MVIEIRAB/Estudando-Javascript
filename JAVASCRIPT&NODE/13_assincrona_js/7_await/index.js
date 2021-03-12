function soma(a, b) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a + b)
        }, 3000);
    })
}

async function resSoma(a,b,c) {

    let x = soma(a,b)
    let y = c

    return await x + y
}

resSoma(2,5,1).then(value => console.log(value))