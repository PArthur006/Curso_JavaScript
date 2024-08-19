//  Declaração de variáveis
var agora = new Date()
var horaAtual = agora.getHours()
var minutos = agora.getMinutes()
var txt = document.getElementById('txt')
var corpo = document.body
var img = document.querySelector('div#img img')

/* Impressão da hora:
    O uso de padStart torna a impressão das horas mais 'correta' esteticaticamente, mantendo o padrão de hh:mm.
*/
txt.innerHTML = `Agora são ${horaAtual.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`

//Condicional para realizar mudanças de acordo com o período do dia.

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

/*      Paleta:
Cor manhã: rgb(240, 227, 158)
Cor tarde: rgb(189, 136, 87)
Cor noite: rgb(73, 73, 73)
 */