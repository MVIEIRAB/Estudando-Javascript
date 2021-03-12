function code(string) {
    if (string.length > 10) {
        return 'o texto excedeu o limite de caracteres!'
    } else {
        return 'Senha registrada!'
    }
}
console.log(code('Ma0501'))