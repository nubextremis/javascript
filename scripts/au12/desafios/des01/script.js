function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
msg.innerHTML = `Agora são ${hora}:${min} horas.`
if (hora >= 0 && hora < 12) {
    // BOM DIA
    img.src = "imagens/manha-250.png"
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora < 18){
    // BOA TARDE
    img.src = "imagens/tarde-250.png"
    document.body.style.background = '#dc9847'
} else {
    // BOA NOITE
    img.src = "imagens/noite-250.png"
    document.body.style.background = '#001345'
}
}
