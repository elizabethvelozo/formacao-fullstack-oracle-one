var idadeCasalReproduz = 28;
var anoAtual = 2022;
var anoDescobertaBrasil = 1500;

function calculaDiferenca(minuendo, subtraendo) {
    return minuendo - subtraendo;
}

function calculaQuociente(dividendo, divisor) {
    return dividendo / divisor;
}

function exibeResolucao(frase) {
    window.document.write(frase + Math.round(qtdeGeracoesBrasil) + ".");
}

var diferencaAnos = calculaDiferenca(anoAtual, anoDescobertaBrasil);
var qtdeGeracoesBrasil = calculaQuociente(diferencaAnos, idadeCasalReproduz);
exibeResolucao("Número de gerações que já se passaram no Brasil: ");