function desenhaQuadrado(cor, x, y, tamanho) {
    var tela = window.document.querySelector("canvas");
    var pincel = tela.getContext("2d");

    pincel.fillStyle = cor;
    pincel.fillRect(x, y, tamanho, tamanho);
    pincel.strokeRect(x, y, tamanho, tamanho);
}

var numerador = parseInt(window.prompt("Digite um numerador(até 20): "));
var denominador = parseInt(window.prompt("Digite um denominador(até 20): "));

var x = 0;
while(x < denominador * 50) {
    if(x < numerador * 50) {
        desenhaQuadrado("green", x, 0, 50);
    x += 50;
    } else {
        desenhaQuadrado("white", x, 0, 50);
    x += 50;
    }
}