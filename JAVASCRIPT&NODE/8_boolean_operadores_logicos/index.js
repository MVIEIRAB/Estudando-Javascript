/*
************* Operador Lógico

&& (AND): As duas comparações precisam dar TRUE ou FALSE para continuar.

|| (OR): Essa comparação se houver houver apenas um retorno TRUE retornará TRUE, se as duas comprações forem 
falsas retornará FALSE. 

! (NOT): Inverte o retorno de algum valor, se o retorno de algum valor vir por padrão TRUE essa 
espressão inverterá para FALSE. 

*/

console.log(5 > 3 && 3 == 2)
console.log(5 > 3 || 3 == 1)

console.log(3 == 3 && "matheus" == "matheus")
console.log("felipe" === "felipe" || false)

console.log(!false)

console.log(true && false)
console.log(false || true)
