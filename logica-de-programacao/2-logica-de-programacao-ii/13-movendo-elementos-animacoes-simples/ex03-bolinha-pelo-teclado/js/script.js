var tela = window.document.querySelector("canvas");
var pincel = tela.getContext("2d");

pincel.fillStyle = "white";
pincel.fillRect(0, 0, 600, 400);

var x = 25;
var y = 25;
function desenhaCirculo(x, y) {
    pincel.fillStyle = "orange";
    pincel.beginPath();
    pincel.arc(x, y, 15, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {
    pincel.clearRect(0, 0, 600, 400);
}

function moveCirculo () {
    limpaTela();
    desenhaCirculo(x, y);
}

// Códigos das teclas
var esquerda = 37;
var cima = 38;
var direita = 39;
var baixo = 40;
var iteracao = 10;
function leTeclado(evento) {
    var tecla = evento.keyCode;

    if(tecla == direita) {
        x += iteracao;
    } else if (tecla == esquerda) {
        x -= iteracao;
    } else if (tecla == baixo) {
        y += iteracao;
    } else if (tecla = cima) {
        y -= iteracao;
    }
}

window.document.onkeydown = leTeclado;
setInterval(moveCirculo, 20);