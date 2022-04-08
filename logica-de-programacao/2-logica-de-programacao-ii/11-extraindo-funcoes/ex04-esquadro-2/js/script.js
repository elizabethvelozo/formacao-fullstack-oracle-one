function desenhaEsquadro(cor, xA, yA, xC, yC) {
    var tela = window.document.querySelector("canvas");
    var pincel = tela.getContext("2d");

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.moveTo(xA, yA);
    pincel.lineTo(xA, yC);
    pincel.lineTo(xC, yC);
    pincel.fill();

    pincel.fillStyle = "white";
    pincel.beginPath();
    pincel.moveTo((6 * xA + xC) / 7, (9 * yA + 5 * yC) / 14);
    pincel.lineTo((6 * xA + xC)/7, (yA + 6 * yC) / 7);
    pincel.lineTo((5 * xA + 9 * xC) / 14, (yA + 6 * yC) / 7);
    pincel.fill();
}

desenhaEsquadro("black", 70, 70, 420, 420);
