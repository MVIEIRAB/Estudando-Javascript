window.addEventListener('keydown', (e) => {
    let letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p']
    for (let i = 0; i <= letras.length; i++) {
        if (e.key == letras[i]) {
            console.log('você pressionou: ', e.key)
        }
    }
})

window.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        console.log('apertou enter')
    }
})

window.addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {
        console.log('soltou enter')
    }
})