var minhaIdade = 25;
var idadeIrmao = 21;

function pulaLinha() {
    window.document.write("<br>");
}

function calculaDiferenca(minuendo, subtraendo) {
    return minuendo - subtraendo;
}

function exibeIdade(frase, idade) {
    window.document.write(frase + idade + ".");
    pulaLinha();
}

function exibeDiferencaIdade(frase) {
    window.document.write(frase + diferencaIdade + ".");
}

var diferencaIdade = calculaDiferenca(minhaIdade, idadeIrmao);
exibeIdade("Minha idade é ", minhaIdade);
exibeIdade("A idade do meu irmão é ", idadeIrmao);
exibeDiferencaIdade("Nossa diferença de idade é ");