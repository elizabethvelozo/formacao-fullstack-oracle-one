var tela = window.document.querySelector("canvas");
var pincel = tela.getContext("2d");

pincel.fillStyle = "oldlace";
pincel.fillRect(0, 0, 600, 400);
pincel.strokeRect(0, 0, 600, 400);

var desenha = false;
function desenhaComMouse(evento) {
    if(desenha) {
        var cor = window.document.getElementById("cor-pincel").value;

        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;

        pincel.fillStyle = cor;
        pincel.beginPath();
        pincel.arc(x, y, 7, 0, 2 * 3.14);
        pincel.fill();
    }

    console.log(x + ", " + y)
}

function ativaDesenho() {
    desenha = true;
}

function desativaDesenho() {
    desenha = false;
}

tela.onmousemove = desenhaComMouse;
tela.onmousedown = ativaDesenho;
tela.onmouseup = desativaDesenho;