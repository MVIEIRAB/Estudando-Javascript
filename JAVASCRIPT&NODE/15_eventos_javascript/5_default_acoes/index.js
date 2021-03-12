let a = document.querySelector('a')

a.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('clickou mas nao mudou de link ou pagina')
})