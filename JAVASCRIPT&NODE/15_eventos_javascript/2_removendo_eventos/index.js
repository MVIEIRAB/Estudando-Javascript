let btn = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')

function avisa() {
    console.log('botao clicado')
}

btn.addEventListener('click', avisa)

btn2.addEventListener('click', () => {
    btn.removeEventListener('click', avisa)
    console.log('Evento removido')
})