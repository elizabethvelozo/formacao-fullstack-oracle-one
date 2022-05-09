var botaoBuscar = window.document.querySelector(".botao-buscar");

botaoBuscar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        var erroAjax = window.document.querySelector("#erro-ajax");

        if(xhr.status == 200) {
            erroAjax.classList.add("erro-invisivel");

            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                adicionaNovoPaciente(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            
            erroAjax.classList.remove("erro-invisivel");
        }
    });
    xhr.send();
});