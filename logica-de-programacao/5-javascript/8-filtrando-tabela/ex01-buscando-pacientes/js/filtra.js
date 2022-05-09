var campoFiltro = window.document.querySelector("#filtro");

campoFiltro.addEventListener("input", function() {
    var pacientes = window.document.querySelectorAll(".paciente");

    if(this.value.length > 0) {
        for(var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var nome = paciente.querySelector(".info-nome").textContent;
            var expressao = new RegExp(this.value, "i");
    
            if(expressao.test(nome)) {
                paciente.classList.remove("paciente-invisivel");
            } else {
                paciente.classList.add("paciente-invisivel");
            }
        }
    } else {
        for(var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("paciente-invisivel");
        }
    }
});