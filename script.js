// Altera o texto do parágrafo com id "texto"
document.getElementById("texto").innerText = "Texto atualizado via DOM";

// Exibe uma mensagem no console do navegador
console.log("Bem-vindo(a) ao nosso site!");

// Função para exibir uma mensagem de boas-vindas
function exibirMensagem() {
    window.alert("Bem-vindo(a) ao nosso site!");
}

// Função para alternar a cor de fundo do documento
function mudarCorDeFundo() {
    if (document.body.style.backgroundColor === "blue") {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "blue";
    }
}

// Função para mostrar a URL atual
function mostrarURL() {
    const urlAtual = window.location.href;
    document.getElementById("urlExibida").innerText = "URL Atual: " + urlAtual;
}

// Função para voltar à página anterior
function voltarPagina() {
    if (window.history.length > 1) {
        // Se houver histórico, volta à página anterior
        window.history.back();
    } else {
        // Caso não haja histórico, exibe uma mensagem
        window.alert("Não há uma página anterior no histórico.");
    }
}
