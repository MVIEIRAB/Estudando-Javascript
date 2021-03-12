let arr = [2, 1, 5, 2, 6]
let arr2 = []

function iteraArray(arr) {
    if (arr.length == 0) {
        throw new Error('Eu preciso receber um array')
    }
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

iteraArray(arr)
iteraArray(arr2)