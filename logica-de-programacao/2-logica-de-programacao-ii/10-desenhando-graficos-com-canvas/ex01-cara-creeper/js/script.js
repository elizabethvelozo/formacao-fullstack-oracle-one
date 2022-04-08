var tela = window.document.querySelector("canvas");
var pincel = tela.getContext("2d");

// Pele
pincel.fillStyle = "darkgreen";
pincel.fillRect(250, 100, 350, 300);

pincel.fillStyle = "black";
// Olho direito
pincel.fillRect(300, 150, 90, 90);
// Olho esquerdo
pincel.fillRect(460, 150, 90, 90);
// Nariz
pincel.fillRect(390, 240, 70, 100);
// Bigode? direito
pincel.fillRect(350, 290, 40, 110);
// Bigode? esquerdo
pincel.fillRect(460, 290, 40, 110);