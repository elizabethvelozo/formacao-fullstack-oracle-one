function exibeNaTela(frase) {
    window.document.write(frase);
}

function repete(inicia, finda, incremento) {
    var contador = inicia;
    while(contador <= finda) {
        if(contador != 33 && contador != 37) {
            exibeNaTela(`${contador} `);
        }

        contador += incremento;
    }
}

var inicia = 30;
var finda = 40;
var incremento = 1;
repete(inicia, finda, incremento);
exibeNaTela("FIM!");