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

function verificaNovoPaciente(paciente) {
    var erros = [];

    if(!verificaPeso(paciente.peso)) {
        erros.push("Peso inválido!");
    }
    if(!verificaAltura(paciente.altura)) {
        erros.push("Altura inválida!");
    }
    if(paciente.nome.length == 0 
        || paciente.peso.length == 0
            || paciente.altura.length == 0
                ||  paciente.gordura.length == 0) {
            erros.push("Preencha todos os campos.");
    }

    return erros;
}

function exibeMensagensErro(erros) {
    var ul = window.document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = window.document.createElement("li");
        li.textContent = erro;

        ul.appendChild(li);
    });
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

    var erros = verificaNovoPaciente(novoPaciente);
    if(erros.length > 0) {
        exibeMensagensErro(erros);
        return;
    }

    var novoPacienteTr = montaNovoPacienteTr(novoPaciente);
    var tabela = window.document.querySelector("#infos-pacientes");
    tabela.appendChild(novoPacienteTr);

    formulario.reset();
    var mensagensErro = window.document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});