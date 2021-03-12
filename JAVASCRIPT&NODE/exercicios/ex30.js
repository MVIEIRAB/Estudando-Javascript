arr1 = [1, 4, 5, 2, 6, 1, 3]
arr2 = [1, 5, 2, 3]

function elementos(arr) {
    if (arr.length < 5) {
        console.log('Poucos elementos')
    } else {
        console.log('Muitos elementos')
    }
}

elementos(arr1)
elementos(arr2)