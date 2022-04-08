function desenhaCirculo(cor, x, y, raio) {
    var tela = window.document.querySelector("canvas");
    var pincel = tela.getContext("2d");

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * 3.14);
    pincel.fill();
}

desenhaCirculo("gold", 200, 125, 15); // 1
desenhaCirculo("gold", 225, 150, 15); // 3
desenhaCirculo("gold", 215, 130, 15); // 2
desenhaCirculo("gold", 200, 175, 15); // 5
desenhaCirculo("gold", 220, 165, 15); // 4
desenhaCirculo("gold", 175, 150, 15); // 7
desenhaCirculo("gold", 180, 165, 15); // 6
desenhaCirculo("gold", 180, 130, 15); // 8
desenhaCirculo("darkgoldenrod", 200, 150, 15);