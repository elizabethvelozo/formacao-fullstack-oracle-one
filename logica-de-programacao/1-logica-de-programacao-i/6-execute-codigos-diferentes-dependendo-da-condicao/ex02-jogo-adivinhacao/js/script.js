function exibeNaTela(frase) {
    window.document.write(frase);
}

function sorteia() {
    var findaIntervalo = parseInt(window.prompt("Digite um número para ser o final do intervalo do número sorteado: "));
    var numeroSorteado = Math.round(Math.random() * findaIntervalo);
    console.log("Número sorteado: " + numeroSorteado);

    return numeroSorteado;
}

function checaAdivinhacao() {
    var situacao;
    var numeroSorteado = sorteia();
    var numeroChutado = parseInt(window.prompt("Escolha um número: "));

    if(numeroChutado == numeroSorteado) {
        exibeNaTela("Você acertou o número sorteado!!!");
    } else {
        if(numeroSorteado > numeroChutado) {
            situacao = "menor";
        } else {
            situacao = "maior";
        }

        exibeNaTela(`Você errou! Você chutou um número ${situacao} que o sorteado!`);
    }
}

checaAdivinhacao();