var segundosIniciais = $("#segundos").text();
var campoDigitacao = $("#campo-digitacao");

$(function() {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    removeLinha();
    $("#botao-reiniciar").click(reinicializaJogo);
    atualizaPlacar();

    $("#select-usuario").selectize({
        create: true,
        sortField: 'text'
    });

    $(".tooltip").tooltipster({
        trigger: "custom"
    });
});

function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var qtdePalavrasFrase = frase.split(" ").length;
    var textoQtdePalavras = $("#palavras");
    textoQtdePalavras.text(qtdePalavrasFrase);
}

function atualizaSegundosIniciais(tempo) {
    segundosIniciais = tempo;
    $(segundos).text(tempo);
}

function inicializaContadores() {
    campoDigitacao.on("input", function() {
        var conteudoCampo = campoDigitacao.val();

        var qtdePalavrasCampo = conteudoCampo.split(/\S+/).length - 1;
        $("#cont-palavras").text(qtdePalavrasCampo);
    
        var qtdeCaracteresCampo = conteudoCampo.length;
        $("#cont-caracteres").text(qtdeCaracteresCampo);
    });
}

function inicializaCronometro() {
    campoDigitacao.one("focus", function() {
        var segundosRestantes = $("#segundos").text();

        $("#botao-reiniciar").toggleClass("botao-habilitado");
        $("#botao-reiniciar").toggleClass("botao-desabilitado");
        $("#botao-reiniciar").attr("disabled",true);

        var cronometroID = setInterval(function() {
            segundosRestantes--;
            $("#segundos").text(segundosRestantes);

            if(segundosRestantes < 1) {
                clearInterval(cronometroID);
                finalizaJogo();
            }
        }, 1000);
    });
}

function inicializaMarcadores() {
    campoDigitacao.on("input", function() {
        var frase = $(".frase").text();
        var conteudoDigitado = campoDigitacao.val();
        var conteudoComparavel = frase.substr(0, conteudoDigitado.length);
    
        if(conteudoDigitado == conteudoComparavel) {
            campoDigitacao.addClass("conteudo-correto");
            campoDigitacao.removeClass("conteudo-incorreto");
        } else {
            campoDigitacao.addClass("conteudo-incorreto");
            campoDigitacao.removeClass("conteudo-correto");
        }
    });
}

function reinicializaJogo() {
    campoDigitacao.attr("disabled", false);
    campoDigitacao.val("");
    campoDigitacao.removeClass("campo-desabilitado");
    campoDigitacao.removeClass("conteudo-correto");
    campoDigitacao.removeClass("conteudo-incorreto");

    $("#cont-palavras").text("0");
    $("#cont-caracteres").text("0");
    $("#segundos").text(segundosIniciais);
    
    inicializaCronometro();
}

function finalizaJogo() {
    campoDigitacao.attr("disabled", true);
    campoDigitacao.addClass("campo-desabilitado");

    $("#botao-reiniciar").attr("disabled", false);
    $("#botao-reiniciar").toggleClass("botao-desabilitado");
    $("#botao-reiniciar").toggleClass("botao-habilitado");

    inserePlacar();
}