function verificar(){
    let inicio = document.getElementById("inicio").value
    let fim = document.getElementById("fim").value
    let passo = document.getElementById("passo").value
    let res = document.querySelector('div#res')

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){
        alert(`[ERRO] Faltam dados!`)
        res.innerHTML = `Impossível contar!`
    } else{
        if(passo <= 0){
            alert("Passo inválido! Considerando PASSO 1")
            passo = 1
        }
        res.innerHTML = `Contando...<br>`

        if(inicio < fim){
            // Contagem Crescente:
            for(let c = inicio; c <= fim; c += passo){
                res.innerHTML += ` ${c} &#x1F449`
            }
        } else{ 
            // Contagem Decrescente       
            for(let c = inicio; c >= fim; c -= passo){
                res.innerHTML += ` ${c} &#x1F449`
            }
        }
        res.innerHTML += ` &#x1F3C1`
        
    }
}