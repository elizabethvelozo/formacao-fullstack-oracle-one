function exibeNaTela(frase) {
    window.document.write(frase);
}

function repete(inicia, finda, incremento) {
    var contador = inicia;
    while(contador <= finda) {
        if(contador % 2 == 0) {
            exibeNaTela(`${contador} `);
        }

        contador += incremento;
    }
}

var inicia = 1;
var finda = 100;
var incremento = 1;
repete(inicia, finda, incremento);
exibeNaTela("FIM!");