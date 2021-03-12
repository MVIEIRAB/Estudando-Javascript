// Metodo STRING remove tudo que não é string de uma STRING ** TENDI NADA

function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm,' ');
  }


let arr = '   é tenso mano  t  '

console.log(arr.trim())