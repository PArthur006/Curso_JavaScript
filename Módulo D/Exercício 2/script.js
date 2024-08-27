function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var AnoNasc = document.getElementById("Ano")
    var res = document.getElementById('res')

    if(AnoNasc.value.length == 0 || AnoNasc.value > ano){
        alert(`[Erro] Verifique os dados e tente novamente`)
    } else{
        var Sexo = document.getElementsByName('Sexo')
        var idade = ano - Number(AnoNasc.value)
        var genero = ''
        var img = document.createElement('img')

        img.setAttribute('id', 'foto')

        if (Sexo[0].checked){
            genero = 'Homem'
            if(idade < 12){
                // Criança
                img.setAttribute('src', 'Imagens/CriançaH.jpg')
            }
            else if(idade < 21){
                // Jovem
                img.setAttribute('src', 'Imagens/AdolescenteH.jpg')
            }
            else if(idade < 50){
                // Adulto
                img.setAttribute('src', 'Imagens/AdultoH.jpg')
            }
            else {
                // Idoso
                img.setAttribute('src', 'Imagens/IdosoH.jpg')
            }
        } 
        
        else{
            genero = 'Mulher'
            if(idade < 12){
                // Criança
                img.setAttribute('src', 'Imagens/CriançaM.jpg')
            }
            else if(idade < 21){
                // Jovem
                img.setAttribute('src', 'Imagens/AdolescenteM.jpg')
            }
            else if(idade < 50){
                // Adulta
                img.setAttribute('src', 'Imagens/AdultoM.jpg')
            }
            else {
                // Idosa
                img.setAttribute('src', 'Imagens/IdosoM.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`
        res.appendChild(img)

    }
}