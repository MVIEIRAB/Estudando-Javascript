window.addEventListener('scroll', (e) => {
    if (pageYOffset > 1000) {
        console.log('ativo aqui mano')
    }
})

window.addEventListener('mousemove', (e) => {
    console.log('y: ', e.y)
    console.log('x: ', e.x)
})