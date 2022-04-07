function pulaLinha() {
    window.document.write("<br>");
}

function exibeNaTela(frase, info) {
    window.document.write(frase + info);
    pulaLinha();
}

function calculaIMC(peso, altura) {
    imc = peso / altura ** 2;
    return imc;
}

var peso = window.prompt("Informe seu peso: ");
exibeNaTela("Peso: ", peso);
var altura = window.prompt("Altura: ");
exibeNaTela("Informe sua altura: ", altura);

var imc = calculaIMC(Number(peso), Number(altura));
exibeNaTela("IMC: ", imc.toFixed(2));