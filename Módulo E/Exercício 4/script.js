/*
    inicio = 0
    fim = 10
    passo = 1
    for (var c = inicio; c <= fim; c+=passo){
        console.log(`Passo ${c}`)
    }
*/
function verificar(){
    let inicio = Number(document.getElementById("inicio").value)
    let fim = Number(document.getElementById("fim").value)
    let passo = Number(document.getElementById("passo").value)
    if(passo <= 0 || inicio > fim){
        alert("[ERRO] Informe os valores corretamente!")
    } else{
        var res = document.querySelector('div#res')
        res.innerHTML = `Contando...<br>`
        for(var c = inicio; c <= fim; c += passo){
            res.innerHTML += ` ${c} &#x1F449`
        }
        res.innerHTML += ` &#x1F3C1`
    }
}