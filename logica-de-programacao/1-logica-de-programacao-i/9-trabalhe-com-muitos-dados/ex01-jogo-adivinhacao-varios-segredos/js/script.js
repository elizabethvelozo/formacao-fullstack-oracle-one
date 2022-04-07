function sorteiaSegredos() {
    var segredos = [];
    var findaIntervalo = 100;

    var contador = 1;
    while(contador <= qtdeSegredos) {
        var segredoSorteado = Math.round(Math.random() * findaIntervalo);

        var segredoRepetido = false;
        for(var i = 0; i < segredos.length; i++) {
            if(segredoSorteado == segredos[i]) {
                segredoRepetido = true;
                break;
            }
        }
        if(!segredoRepetido) {
            segredos.push(segredoSorteado);
            contador++;
        }
    }
    return segredos;
}

function checaAdivinhacao() {
    var segredos = sorteiaSegredos();
    console.log("Segredos: " + segredos);

    var contador = 1;
    while(contador <= qtdeSegredos) {
        var numeroChutado = parseInt(window.prompt(`Tente acertar 1 dos meus ${qtdeSegredos} segredos(0-100): `));

        var segredoDescoberto = false;
        for(var i = 0; i < segredos.length; i++) {
            if(numeroChutado == segredos[i]) {
                window.alert(`Você acertou o ${i + 1}º segredo!!! Parabéns!!!`);
                segredoDescoberto = true;
                break;
            }
        }
        if(segredoDescoberto) {
            break;
        }
        contador++;
    }
    if(!segredoDescoberto) {
        window.alert(`Você acertou nenhum segredo! :/`);
    }
}

var qtdeSegredos = 5;
checaAdivinhacao();