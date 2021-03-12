// não entendi muito bem o uso dela!

let promessa = Promise.resolve(4 + 8)

console.log('alguma coisa')

promessa.then((value)=>{console.log('asoma é', value)})