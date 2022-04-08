var tela = window.document.querySelector("canvas");
var pincel = tela.getContext("2d");

pincel.fillStyle = "white";
pincel.fillRect(0, 0, 600, 400);

var raio = 25;
var xAlvo = 300;
var yAlvo = 200;
function desenhaCirculo(cor, x, y, raio) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function verificaAcerto(evento) {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    if(x >= xAlvo - raio 
        && x <= xAlvo + raio 
            && y >= yAlvo - raio 
                && y <= yAlvo + raio) {
        window.alert("Você acertou!!!");
    } else {
       window.alert("Você errou o alvo! :/");
    }
}

desenhaCirculo("red", xAlvo, yAlvo, raio * 4);
desenhaCirculo("white", xAlvo, yAlvo, raio * 2.5);
desenhaCirculo("red", xAlvo, yAlvo, raio);

tela.onclick = verificaAcerto;