function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'imagens/criancahomem-250.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovemhomem-250.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adultohomem-250.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/velhohomem.png')
            }
            } else if (fsex[1].checked) {
                gênero = 'Mulher'
                if (idade >= 0 && idade < 10){
                    // Criança
                    img.setAttribute('src', 'imagens/criancamulher-250.png')
                } else if (idade < 21) {
                    // Jovem
                    img.setAttribute('src', 'imagens/jovemmulher-250.png')
                } else if (idade < 50) {
                    // Adulto
                    img.setAttribute('src', 'imagens/adultomulher-250.png')
                } else {
                    // Idoso
                    img.setAttribute('src', 'imagens/velhomulher.png')
                }
            }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
}
