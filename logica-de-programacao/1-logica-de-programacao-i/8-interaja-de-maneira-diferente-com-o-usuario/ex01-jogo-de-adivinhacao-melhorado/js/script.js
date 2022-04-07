function sorteia() {
    var numeroSorteado = Math.round(Math.random() * 10);
    console.log("Número sorteado: " + numeroSorteado);

    return numeroSorteado;
}

function checaAdivinhacao() {
    var situacao;
    var numeroSorteado = sorteia();
    var numeroChutado = window.document.getElementById("numero-chutado");
    var resultado = window.document.getElementById("resultado");

    if(numeroChutado.value == numeroSorteado) {
        resultado.innerHTML = "Você acertou o número sorteado!!!";
    } else {
        if(numeroSorteado > numeroChutado.value) {
            situacao = "menor";
        } else {
            situacao = "maior";
        }
        resultado.innerHTML = `Você errou! Você chutou um número ${situacao} que o sorteado!`;
    }
    numeroChutado.value = "";
    numeroChutado.focus();
}

var botao = window.document.querySelector("button");
botao.onclick = checaAdivinhacao;