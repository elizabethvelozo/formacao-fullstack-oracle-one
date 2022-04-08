var tela = window.document.querySelector("canvas");
var pincel = tela.getContext("2d");

pincel.fillStyle = "white";
pincel.fillRect(0, 0, 600, 400);

var raio = 25;
function desenhaCirculo(raio) {
    pincel.fillStyle = "orange";
    pincel.beginPath();
    pincel.arc(300, 200, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {
    pincel.clearRect(0, 0, 600, 400);
}

var iteracao;
function pulsa() {
    limpaTela();

    if(raio < 26) {
        iteracao = + 1;
    } else if(raio > 50) {
        iteracao = - 1;
    }

    desenhaCirculo(raio);
    raio += iteracao;
}

setInterval(pulsa, 5);