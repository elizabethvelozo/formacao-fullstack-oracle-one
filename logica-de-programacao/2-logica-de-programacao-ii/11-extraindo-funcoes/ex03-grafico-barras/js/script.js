function desenhaBarra(cor, x, y, largura, altura) {
    var tela = window.document.querySelector("canvas");
    var pincel = tela.getContext("2d");

    pincel.fillStyle = cor;
    pincel.fillRect(x, y, largura, altura);
}

function desenhaTexto(x, y, texto) {
    var tela = window.document.querySelector("canvas");
    var pincel = tela.getContext("2d");

    pincel.fillStyle = "black";
    pincel.font = "15px Georgia";
    pincel.fillText(texto, x, y);
}

var serie2015 = [50, 25, 20, 5];
var serie2016 = [65, 20, 13, 2];
var corNavegador = ["skyblue", "yellowgreen", "khaki", "lightsalmon"];
var nomeNavegador = ["Chrome", "Firefox", "Safari", "Outros"];

var y = 0;
var i = 0;
var pxGrafico = 350;
for(var i = 0; i < serie2015.length; i++) {
    var altura = pxGrafico * serie2015[i] / 100;

    desenhaBarra(corNavegador[i], 50, y, 100, altura);
    desenhaTexto(70, y + 15, nomeNavegador[i]);
    y += pxGrafico * serie2015[i] / 100;
}

var y = 0;
for(var i = 0; i < serie2016.length; i++) {
    var altura = pxGrafico * serie2016[i] / 100;

    desenhaBarra(corNavegador[i], 250, y, 100, altura);
    desenhaTexto(275, y + 15, nomeNavegador[i]);
    y += pxGrafico * serie2016[i] / 100;
}