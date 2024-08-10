// Formatação de Strings
var s = 'JavaScript'

console.log(s) // Não faz interpolação
console.log('Eu estou aprendendo' + s) // Usa concatenação
console.log(`Eu estou aprendendo ${s}`) // Usa template string (interpolação)

//Outras formatações:
console.log(`A palavra ${s} tem ${s.length} letras.`)
console.log(`A palavra ${s} em maiúsculas fica ${s.toUpperCase()}.`)
console.log(`A palavra ${s} em minúsculas fica ${s.toLowerCase()}.`)

