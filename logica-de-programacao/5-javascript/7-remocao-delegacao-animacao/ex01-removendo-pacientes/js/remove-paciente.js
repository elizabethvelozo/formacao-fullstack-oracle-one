var tBody = window.document.querySelector("#infos-pacientes");

tBody.addEventListener("dblclick", function(event) {
    var elementoClicado = event.target;
    var paiElementoClicado = elementoClicado.parentNode;

    paiElementoClicado.classList.add("animacao-remocao");

    setTimeout(function() {
        paiElementoClicado.remove();
    }, 450);
});