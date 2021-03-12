const arr = ['Matheus','gabi','pedro','luizinho','dinha']

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'Matheus') {
        console.log('eae meo')
        return
    } else {
        console.log('os nomes: ',arr[i])
    }
}

if (arr.includes('Matheus')) {
    console.log('Olá!')
}