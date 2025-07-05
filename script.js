window.onload = function() {
    const botao = document.getElementById("botaoMensagem");
    const mensagem = document.getElementById("mensagem");

    botao.addEventListener("click", function() {
        mensagem.textContent = "Você é incrível! Nunca pare de aprender!";
    });
}