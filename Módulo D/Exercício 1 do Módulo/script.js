//  Declaração de variáveis
var agora = new Date()
var horaAtual = agora.getHours()
var minutos = agora.getMinutes()
var txt = document.getElementById('txt')
var corpo = document.body
var img = document.querySelector('div#img img')
txt.innerHTML = `Agora são ${horaAtual}:${minutos}`

if (horaAtual >= 12 && horaAtual < 18){
    txt.innerHTML += `<br>Boa Tarde!`
    corpo.style.background = 'rgb(189, 136, 87)'
    img.src = "Imagens/tarde.png"
} else if (horaAtual >= 18 || horaAtual < 5){
    txt.innerHTML += '<br>Boa Noite!'
    corpo.style.background = 'rgb(73, 73, 73)'
    img.src = "Imagens/noite.png"
} else{
    txt.innerHTML += '<br>Bom Dia!'
    img.src = "Imagens/manha.png"
}

/*
Cor manhã: rgb(240, 227, 158)
Cor tarde: rgb(189, 136, 87)
Cor noite: rgb(73, 73, 73)
 */