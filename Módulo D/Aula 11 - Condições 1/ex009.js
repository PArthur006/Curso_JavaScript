var pais = 'Brazil'
pais = pais.toLocaleUpperCase()
console.log(`Vivendo em ${pais}`)
if(pais != 'BRASIL' && pais !='BRAZIL'){
    console.log("Você é estrangeiro!")
}
else {
    console.log("Você é brasileiro!")
}