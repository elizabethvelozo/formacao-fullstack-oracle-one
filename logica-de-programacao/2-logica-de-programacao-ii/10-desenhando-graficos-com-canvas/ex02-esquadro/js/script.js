var tela = window.document.querySelector("canvas");
var pincel = tela.getContext("2d");

pincel.fillStyle = "orange";
pincel.beginPath();
pincel.moveTo(250, 100);
pincel.lineTo(250, 350);
pincel.lineTo(500, 350);
pincel.fill();

pincel.fillStyle = "bisque";
pincel.beginPath();
pincel.moveTo(270, 150);
pincel.lineTo(270, 330);
pincel.lineTo(450, 330);
pincel.fill();