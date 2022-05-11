var frase = $(".frase").text();
var segundosIniciais = $("#segundos").text();
var campoDigitacao = $("#campo-digitacao");

$(function() {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    removeLinha();
    $("#botao-reiniciar").click(reinicializaJogo);
});

function atualizaTamanhoFrase() {
    var qtdePalavrasFrase = frase.split(" ").length;
    var textoQtdePalavras = $("#palavras");
    textoQtdePalavras.text(qtdePalavrasFrase);
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
    var segundosRestantes = $("#segundos").text();

    campoDigitacao.one("focus", function() {
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
        var conteudoDigitado = campoDigitacao.val();
        var conteudoComparavel = frase.substr(0, conteudoDigitado.length);
        console.log(conteudoDigitado)
        console.log(conteudoComparavel)
    
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