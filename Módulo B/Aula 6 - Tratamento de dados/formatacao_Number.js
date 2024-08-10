// Formatação de Number's
var n1 = 1234.5
console.log(n1.toFixed(2)) // Número com duas casas decimais
console.log(n1.toString().replace('.',',')) // Para substituir todos os '.' por ','

// Conversão para moedas
console.log(n1.toLocaleString('pt-br', {style: "currency", currency: 'BRL'})) // Real
console.log(n1.toLocaleString('en-US', {style: "currency", currency: 'USD'})) // Dólar
console.log(n1.toLocaleString('de-DE', {style: "currency", currency: 'EUR'})) // Euro
