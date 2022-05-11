function removeLinha() {
    $(".botao-remover").click(function() {
        $(this).parent().parent().remove();
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

function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Elizabeth";
    var qtdePalavrasPlacar = $("#cont-palavras").text();

    var linha = novaLinha(usuario, qtdePalavrasPlacar);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.append(linha);
}