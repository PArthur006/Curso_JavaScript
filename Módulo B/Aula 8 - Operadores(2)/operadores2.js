// Operadores Relacionais
console.log("OPERADORES RELACIONAIS")

var preco = 100
var idade = 17
var curso = 'JavaScript'
var n1 = 2
var n2 = 3

console.log(preco >= 200.5) // O preço é maior ou igual a 200.5?
console.log(idade < 18) // A idade é menor que 18?
console.log(curso == 'JavaScript') // O curso é JavaScript?
console.log(n1 != n2) // O primeiro número é diferente do segundo?

// OPERADOR IDENTIDADE
console.log("OPERADOR IDENTIDADE")

console.log(5==5)
console.log(5=='5') 
console.log(5==='5') // Testando se são idênticos em tipo e valor
console.log(5!=='5') // Desigual restrito,são de tipos diferentes e mesmo valor
 
// OPERADORES LÓGICOS
console.log("OPERADORES LÓGICOS")

console.log(true && true) // Verdadeiro e Verdadeiro
console.log(!false) // Não Falso(Verdadeiro)
console.log(true || false) // Verdadeiro ou Falso

// OPERADOR TERNÁRIO
console.log("OPERADOR TERNÁRIO")

// Funciona com ? e :
// teste ? true : false

console.log(5 > 3 ? 'Verdadeiro' : 'Falso') 
console.log(5 < 3 ? 'Verdadeiro' : 'Falso')
