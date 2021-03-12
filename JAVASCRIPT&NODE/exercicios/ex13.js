let num = 11
let div = 0


for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        div++
    }
}

if (div == 2) {
    console.log(`o numero ${num} é primo`)
} else {
    console.log(`o numero ${num} não é primo`)
}

