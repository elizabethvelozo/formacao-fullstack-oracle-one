var tela = window.document.querySelector("canvas");
var pincel = tela.getContext("2d");

pincel.fillStyle = "oldlace";
pincel.fillRect(0, 0, 600, 400);
pincel.strokeRect(0, 0, 600, 400);

var i = 0;
var cores = ["blue", "red", "green"];
function desenhaBolinha(evento) {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    pincel.fillStyle = cores[i];
    pincel.beginPath();
    pincel.arc(x, y, 10, 0, 2 * 3.14);
    pincel.fill();

    console.log(x + ", " + y);
}

function trocaCor() {
    i++;
    if(i == 3){
        i = 0;
    }

    return false;
}

tela.onclick = desenhaBolinha;
tela.oncontextmenu = trocaCor;