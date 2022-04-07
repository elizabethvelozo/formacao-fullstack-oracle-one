function exibeNaTela(frase) {
    window.document.write(frase);
}

function repete(inicia, finda, incremento) {
    var contador = inicia;
    while(contador >= finda) {
        exibeNaTela(`${contador} `);

        contador += incremento;
    }
}

var inicia = 20;
var finda = 0;
var incremento = -1;
repete(inicia, finda, incremento);
exibeNaTela("FIM!");