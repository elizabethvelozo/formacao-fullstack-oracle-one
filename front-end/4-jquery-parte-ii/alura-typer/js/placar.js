$("#botao-placar").click(mostraPlacar);
$("#botao-sincronizacao").click(sincronizaPlacar);

function removeLinha() {
    $(".botao-remover").click(function() {
        var linha = $(this).parent().parent();

        linha.fadeOut(500);
        setTimeout(function() {
            linha.remove();
        }, 500);
    });
}

function novaLinha(usuario, qtdePalavrasPlacar) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(qtdePalavrasPlacar);
    var colunaRemover = $("<td>");
    var icone = $("<i>").addClass("small").addClass("material-icons").addClass("botao-remover").text("delete");

    colunaRemover.append(icone);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function scrollPlacar() {
    var posicaoPlacar = $(".placar").offset().top;
    
    $("html, body").animate(
    {
        scrollTop: posicaoPlacar + "px"
    }, 1000);
}

function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = $("#select-usuario").val();
    var qtdePalavrasPlacar = $("#cont-palavras").text();

    var linha = novaLinha(usuario, qtdePalavrasPlacar);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.prepend(linha);

    $(".placar").slideDown(650);
    scrollPlacar();
}

function mostraPlacar() {
     $(".placar").stop().slideToggle(650);
}

function sincronizaPlacar() {
    var placar = [];
    var linhas = $("tbody > tr");

    linhas.each(function() {
        var usuario = $(this).find("td:nth-child(1)").text();
        var palavras = $(this).find("td:nth-child(2)").text();

        var pontuacao = {
            usuario: usuario,
            pontos: palavras
        };

        placar.push(pontuacao);
    });

    var dados = {
        placar: placar
    };

    $.post("http://localhost:3000/placar", dados, function() {
        console.log("O placar foi salvo no servidor.");

        $(".tooltip").tooltipster("open");
    })
    .fail(function() {
        $(".tooltip").tooltipster("open").tooltipster("content", "Falha ao sincronizar.");
    })
    .always(function() {
        setTimeout(function() {
            $(".tooltip").tooltipster("close");
        }, 1500);
    });
}

function atualizaPlacar() {
    $.get("http://localhost:3000/placar", function(data) {
        $(data).each(function() {
            var linha = novaLinha(this.usuario, this.pontos);
            linha.find(".botao-remover").click(removeLinha);

            $("tbody").append(linha);
        });
    });
} 