function extraiInfosNovoPaciente(formulario) {
    var novoPaciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calculaIMC(formulario.peso.value, formulario.altura.value)
    }

    return novoPaciente;
}

function montaTd(info, classe) {
    var td = document.createElement("td");
    td.textContent = info;
    td.classList.add(classe);

    return td;
}

function montaNovoPacienteTr(paciente) {
    var novoPacienteTr = window.document.createElement("tr");
    novoPacienteTr.classList.add("paciente");

    novoPacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    novoPacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    novoPacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    novoPacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    novoPacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return novoPacienteTr;
}

var botaoAdicionar = window.document.querySelector(".botao-adicionar");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var formulario = window.document.querySelector("#formulario-adiciona");
    var novoPaciente = extraiInfosNovoPaciente(formulario);
    var novoPacienteTr = montaNovoPacienteTr(novoPaciente);
    var tabela = window.document.querySelector("#infos-pacientes");
    tabela.appendChild(novoPacienteTr);

    formulario.reset();
});