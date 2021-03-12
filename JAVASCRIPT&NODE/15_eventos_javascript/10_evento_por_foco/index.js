let input = document.querySelector('input')

input.addEventListener('focus', () => {
    console.log('no input')
})

input.addEventListener('blur', () => {
    console.log('saiu do input')
})