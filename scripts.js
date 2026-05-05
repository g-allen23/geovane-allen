function enviarMensagem(event) {
    event.preventDefault()

    const nome = document.getElementById('nome').value
    const mensagem = document.getElementById('mensagem').value
    const telefone = '5585991986569'

    const texto = `Olá! Me chamo ${nome}, ${mensagem}`
    const mensagemFormatada = encodeURIComponent(texto)

    const url = `https://wa.me/${telefone}?text=${mensagemFormatada}`

    window.open(url, '_blank')
}