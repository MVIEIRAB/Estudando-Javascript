// o INCLUDES encontra um elemento pelo qual alguem está procurando explicitamente

let arr = ['luiz','gabi','dudu','fred']

if (arr.includes('matheus') == false) {
    arr.push('matheus')
} else {console.log('ja possui matheus')}

arr.forEach(element => {
    console.log(element)
})