var tela = window.document.querySelector("canvas");
var pincel = tela.getContext("2d");

pincel.fillStyle = "green";
pincel.fillRect(150, 100, 400, 300);

// Losango parte de cima
pincel.fillStyle = "yellow";
pincel.beginPath();
pincel.moveTo(350, 130);
pincel.lineTo(180, 250);
pincel.lineTo(520, 250);
pincel.fill();
// Losango parte de baixo
pincel.moveTo(350, 370);
pincel.lineTo(180, 250);
pincel.lineTo(520, 250);
pincel.fill();

pincel.fillStyle = "blue";
pincel.beginPath();
pincel.arc(350, 250, 70, 0, 2 * 3.14);
pincel.fill();