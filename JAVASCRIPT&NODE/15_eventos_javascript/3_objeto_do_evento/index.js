let btn = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')

function avisa(e) {
    console.log(e)
}

btn.addEventListener('click', avisa)

btn2.addEventListener('click', () => {
    btn.removeEventListener('click', avisa)
    console.log('Evento removido')
})