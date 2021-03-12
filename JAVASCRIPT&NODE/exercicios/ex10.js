let idade = 18
let cnh = false

if (idade >= 18 && cnh == true) {
    console.log('Você pode dirigir!')
} else if (idade <= 17 && cnh == false) {
    console.log('você não pode dirigir!')
} else if (idade >= 18 && cnh == false) {
    console.log('você não pode dirigir!')
} else {console.log('as opções não são legiveis')}