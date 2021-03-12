window.addEventListener('load', () => {
    alert('hello')
})

window.addEventListener('beforeunload', (e) => {
    e.returnValue = null
})