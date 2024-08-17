var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var diaNum = agora.getDay()

if (hora < 12){
    console.log("Bom dia!")
} else if (hora < 18){
    console.log("Boa tarde!")
} else{
    console.log("Boa noite!")
}
console.log(`Hoje é Agora são exatamente ${hora}:${minuto}`)

var diaSem;
switch(diaNum){
    
    case 0:
        diaSem = "Domingo"
        break
    case 1:
        diaSem = "Segunda"
        break
    case 2:
        diaSem = "Terça"
        break
    case 3:
        diaSem = "Quarta"
        break
    case 4:
        diaSem = "Quinta"
        break
    case 5:
        diaSem = "Sexta"
        break
    case 6:
        diaSem = "Sábado"
        break
    
}

console.log(`Hoje é ${diaSem}!`)