$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function fraseAleatoria() {
    $(".img-carregamento").toggle();

    $.get("http://localhost:3000/frases", mostraFraseAleatoria)
    .fail(function() {
        $("#mensagem-erro").toggle();

        setTimeout(function() {
            $("#mensagem-erro").toggle();
        }, 3000);
    })
    .always(function() {
        $(".img-carregamento").toggle();
    });
}

function mostraFraseAleatoria(data) {
    var frase = $(".frase");
    var indiceAleatorio = Math.floor(Math.random() * data.length);
    frase.text(data[indiceAleatorio].texto);

    atualizaTamanhoFrase();
    atualizaSegundosIniciais(data[indiceAleatorio].tempo);
}

function trocaFrase(data) {
    var frase = $(".frase");
    frase.text(data.texto);

    atualizaTamanhoFrase();
    atualizaSegundosIniciais(data.tempo);
}

function buscaFrase() {
    $(".img-carregamento").toggle();

    var fraseId = $("#frase-id").val();
    var dados = {id: fraseId};

    $.get("http://localhost:3000/frases", dados, trocaFrase)
    .fail(function() {
        $("#mensagem-erro").toggle();

        setTimeout(function() {
            $("#mensagem-erro").toggle();
        }, 3000);
    })
    .always(function() {
        $(".img-carregamento").toggle();
    });
}