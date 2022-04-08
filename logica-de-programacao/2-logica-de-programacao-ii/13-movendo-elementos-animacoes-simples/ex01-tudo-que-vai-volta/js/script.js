var tela = window.document.querySelector("canvas");
var pincel = tela.getContext("2d");

pincel.fillStyle = "white";
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y) {
    pincel.fillStyle = "orange";
    pincel.beginPath();
    pincel.arc(x, y, 15, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {
    pincel.clearRect(0, 0, 600, 400);
}

var x = 25;
var iteracao;
function animaCirculo() {
    limpaTela();

    if(x <= 25) {
        iteracao = + 5;
    } else if(x >= 575) {
        iteracao = - 5;
    }

    desenhaCirculo(x, 150);
    x += iteracao;
}

setInterval(animaCirculo, 5);