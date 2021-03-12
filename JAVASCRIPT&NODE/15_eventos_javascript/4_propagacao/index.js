let btn = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let p = document.querySelector('p')

function avisa(e) {
    console.log('avisa la que nos chego')
    e.stopPropagation()
}

btn.addEventListener('click', avisa)

btn2.addEventListener('click', () => {
    btn.removeEventListener('click', avisa)
    console.log('Evento removido')
})

p.addEventListener('click', () => {
    console.log('clickou no paragrafo')
})
