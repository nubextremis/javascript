let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeito valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está a posição ${pos}`)
}

/*for (let pos=0; pos<num.length; pos++){
    console.log(`O ${pos + 1}º valor do vetor é ${num[pos]}`)
}*/