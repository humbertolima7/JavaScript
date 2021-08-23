const escola = "Cod3r"

console.log(escola.charAt(4)) //puxa o campo da letra da palavra
console.log(escola.charAt(5)) //campo vazio
console.log(escola.charCodeAt(3)) //tabela asque
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))

console.log('Ana, Maria, Pedro'.split(',')) //gera um array