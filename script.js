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
        window.history.back();
    } else {
        window.alert("Não há uma página anterior no histórico.");
    }
}

// Função para verificar se os cookies estão habilitados
function verificarCookies() {
    if (navigator.cookieEnabled) {
        window.alert("Cookies estão habilitados.");
    } else {
        window.alert("Cookies estão desabilitados.");
    }
}

// Adiciona evento ao botão "Verificar Cookies" usando addEventListener
document.getElementById("verificarCookies").addEventListener("click", verificarCookies);

// Função para alterar a cor de fundo da caixa ao passar o mouse
function alterarCor() {
    document.getElementById("caixa").style.backgroundColor = "lightblue";
}

// Função para restaurar a cor original da caixa quando o mouse sai
function restaurarCor() {
    document.getElementById("caixa").style.backgroundColor = "lightgray";
}
