function gerarTabuada(){
    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        alert("[ERRO] Insira um número para gerar a tabuada!")
    }
    else{
        x = Number(num.value)
        tab.innerHTML = ''

        for (let c = 0; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${c} X ${x} => ${x*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}
