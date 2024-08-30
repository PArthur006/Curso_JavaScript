function procuraIndice(n1, array){
    n1 = Number(n1)
    pos = array.indexOf(n1) // Uso do indexOf para procurar o valor no array
    if (pos == -1){
        console.log(`O valor não foi encontrado!`)
    } else{
        console.log(`O valor está na posição ${pos}`)
    }
}

let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

procuraIndice(8, num)