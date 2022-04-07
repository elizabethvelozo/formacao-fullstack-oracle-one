function exibeNaTela(frase) {
    window.document.write(frase);
}

function checaHabilitacaoADirigir() {
    var frase;
    var idade = parseInt(window.prompt("Digite sua idade: "));

    if(idade < 18) {
        frase = ", portanto não está habilitado a dirigir.";
    } else {
        var possuiCarteira = window.prompt("Você possui carteira de habilitação? (S/N): ").toUpperCase();

        if(possuiCarteira == "S") {
            frase = " e possui carteira, portanto está habilitado a dirigir.";
        } else {
            frase = ", mas não possui carteira, portato não está habilitado a dirigir.";
        }
    }

    exibeNaTela(`Você tem ${idade} anos` + frase);
}

checaHabilitacaoADirigir();