var tela = window.document.querySelector("canvas");
var pincel = tela.getContext("2d");

pincel.fillStyle = "white";
pincel.fillRect(0, 0, 1000, 700);

function desenhaQuadradinho(cor, x, y, tamanho) {
    pincel.fillStyle = cor;
    pincel.fillRect(x, y, tamanho, tamanho);
    pincel.strokeRect(x, y, tamanho, tamanho);
}

function desenhaBolinha(cor, x, y) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, 7.5, 0, 2 * Math.PI);
    pincel.fill();
}

var cor = "red";
function escolheCor(evento) {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    if(y > yQuadradinhos && y < yQuadradinhos + tamQuadradinhos) {
        if(x > xVermelho && x < xVermelho + tamQuadradinhos) {
            cor = "red";
        } else if(x > xVerde && x < xVerde + tamQuadradinhos) {
            cor = "green";
        } else if(x > xAzul && x < xAzul + tamQuadradinhos) {
            cor = "blue";
        }
    }
}

var desenha = false;
function ativaDesenho() {
    desenha = true;
}

function desativaDesenho() {
    desenha = false;
}

function desenhaNaTela(evento) {
    if(desenha) {
       var x = evento.pageX - tela.offsetLeft;
       var y = evento.pageY - tela.offsetTop;

       var paleta = x >= 0 && x <= 210 && y >= 0 && y <= 100;
       if(!paleta) {
            desenhaBolinha(cor, x, y);
       }
   }
}

var xVermelho = 25;
var xVerde = 80;
var xAzul = 135;
var yQuadradinhos = 25;
var tamQuadradinhos = 50;
desenhaQuadradinho("red", xVermelho, yQuadradinhos, tamQuadradinhos);
desenhaQuadradinho("green", xVerde, yQuadradinhos, tamQuadradinhos);
desenhaQuadradinho("blue", xAzul, yQuadradinhos, tamQuadradinhos);

tela.onmousemove = desenhaNaTela;
tela.onmousedown = ativaDesenho;
tela.onmouseup = desativaDesenho;
tela.onclick = escolheCor;