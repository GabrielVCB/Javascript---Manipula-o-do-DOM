// Altera o texto do parágrafo com id "texto"
document.getElementById("texto").innerText = "Texto atualizado via DOM";

// Exibe a mesma mensagem no console do navegador
console.log("Bem-vindo(a) ao nosso site!");

// Função para exibir uma mensagem de boas-vindas
function exibirMensagem() {
    // Exibe a mensagem em uma janela de alerta
    window.alert("Bem-vindo(a) ao nosso site!");
}

// Função para alternar a cor de fundo do documento
function mudarCorDeFundo() {
    // Verifica a cor atual de fundo do body
    if (document.body.style.backgroundColor === "blue") {
        // Se for azul, altera para a cor original (branco)
        document.body.style.backgroundColor = "white";
    } else {
        // Caso contrário, muda para azul
        document.body.style.backgroundColor = "blue";
    }
}
