document.getElementById("texto").innerText = "Texto atualizado via DOM";

console.log("Bem-vindo(a) ao nosso site!");

function exibirMensagem() {
    window.alert("Bem-vindo(a) ao nosso site!");
}

function mudarCorDeFundo() {
    if (document.body.style.backgroundColor === "blue") {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "blue";
    }
}

function mostrarURL() {
    const urlAtual = window.location.href;
    document.getElementById("urlExibida").innerText = "URL Atual: " + urlAtual;
}

function voltarPagina() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.alert("Não há uma página anterior no histórico.");
    }
}

function verificarCookies() {
    if (navigator.cookieEnabled) {
        window.alert("Cookies estão habilitados.");
    } else {
        window.alert("Cookies estão desabilitados.");
    }
}

document.getElementById("verificarCookies").addEventListener("click", verificarCookies);

function alterarCor() {
    document.getElementById("caixa").style.backgroundColor = "lightblue";
}

function restaurarCor() {
    document.getElementById("caixa").style.backgroundColor = "lightgray";
}

function detectarTecla(event) {
    target("Tecla pressionada:", event.key);

    if (!isNaN(event.key) && event.key !== "Backspace") {
        event.preventDefault();
        target("Tecla bloqueada: Não é permitido digitar números.");
    }
}
