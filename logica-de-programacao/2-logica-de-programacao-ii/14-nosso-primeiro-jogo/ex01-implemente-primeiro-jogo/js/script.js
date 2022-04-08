var tela = window.document.querySelector("canvas");
var pincel = tela.getContext("2d");

pincel.fillStyle = "white";
pincel.fillRect(0, 0, 1000, 700);

var raio = 10;
function desenhaCirculo(cor, x, y, raio) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.stroke();
    pincel.lineWidth = 2;
    pincel.fill();
}

var xAlvo = 150;
var yAlvo = 150;
function desenhaAlvo(x, y) {
    desenhaCirculo("white", x, y, raio * 9);
    desenhaCirculo("white", x, y, raio * 8);
    desenhaCirculo("black", x, y, raio * 7);
    desenhaCirculo("black", x, y, raio * 6);
    desenhaCirculo("dodgerblue", x, y, raio * 5);
    desenhaCirculo("dodgerblue", x, y, raio * 4);
    desenhaCirculo("orangered", x, y, raio * 3);
    desenhaCirculo("orangered", x, y, raio * 2);
    desenhaCirculo("gold", x, y, raio);
    desenhaCirculo("gold", x, y, raio * 0.5);
    desenhaCirculo("black", x, y, raio * 0.01);
}

function limpaTela() {
    pincel.clearRect(0, 0, 1000, 700);
}

function escolheDificuldade() {
    var dificuldade = parseInt(window.prompt("Escolha a dificuldade: \n 1 - Fácil \n 2 - Média \n 3 - Difícil"));

    if(dificuldade == 1) {
        return 1500;
    } else if (dificuldade == 2) {
        return 900;
    } else if (dificuldade == 3) {
        return 500;
    } else {
        return escolheDificuldade();
    }
}

function geraPosicaoAleatoria() {
    limpaTela();

    xAlvo = Math.floor(Math.random() * 1000);
    yAlvo = Math.floor(Math.random() * 600);

    desenhaAlvo(xAlvo, yAlvo);
}

function verificaAcerto(evento) {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    if(x >= xAlvo - raio 
        && x <= xAlvo + raio 
            && y >= yAlvo - raio 
                && y <= yAlvo + raio) {
        window.alert("Você ACERTOU o alvo!!!")
    } else {
        window.alert("Você errou o alvo! :/")
    }
}

desenhaAlvo(xAlvo, yAlvo);

var intMudancaPosicao = escolheDificuldade();
setInterval(geraPosicaoAleatoria, intMudancaPosicao);
tela.onclick = verificaAcerto;