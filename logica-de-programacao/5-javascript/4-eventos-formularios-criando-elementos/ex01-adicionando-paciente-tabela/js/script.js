function calculaIMC(peso, altura) {
    var imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function verificaIMCPaciente(paciente) {
    var pesoPaciente = paciente.querySelector(".info-peso").textContent;
    var alturaPaciente = paciente.querySelector(".info-altura").textContent;

    if(pesoPaciente <= 0 || pesoPaciente >= 700) {
        paciente.classList.add("peso-invalido");
        return "Peso inválido";
    } else if (alturaPaciente <= 0 || alturaPaciente >= 2.70) {
        paciente.classList.add("altura-invalida");
        return "Altura inválida";
    }
    return calculaIMC(pesoPaciente, alturaPaciente);
}


var tituloPrincipal = window.document.querySelector(".titulo-principal");
tituloPrincipal.textContent = "Tathi Nutricionista";

var listaPacientes = window.document.querySelectorAll(".paciente");
var listaIMCPacientes = [];
var listaTextoIMCPacientes = [];

for(var i =  0; i < listaPacientes.length; i++) {
    listaIMCPacientes.push(verificaIMCPaciente(listaPacientes[i]));
}

for(var i =  0; i < listaPacientes.length; i++) {
    listaTextoIMCPacientes.push(listaPacientes[i].querySelector(".info-imc"));
    listaTextoIMCPacientes[i].textContent = listaIMCPacientes[i];
}


var botaoAdicionar = window.document.querySelector(".botao-adicionar");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var formulario = window.document.querySelector("#formulario-adiciona");
    var nomeNovoPaciente = formulario.querySelector("#nome-paciente").value;
    var pesoNovoPaciente = formulario.querySelector("#peso-paciente").value;
    var alturaNovoPaciente = formulario.querySelector("#altura-paciente").value;
    var percGorduraNovoPaciente = formulario.querySelector("#perc-gordura-paciente").value;

    var novoPacienteTr = window.document.createElement("tr");
    var nomeNovoPacienteTd = window.document.createElement("td");
    var pesoNovoPacienteTd = window.document.createElement("td");
    var alturaNovoPacienteTd = window.document.createElement("td");
    var percGorduraNovoPacienteTd = window.document.createElement("td");
    var imcNovoPacienteTd = window.document.createElement("td");

    nomeNovoPacienteTd.textContent = nomeNovoPaciente;
    pesoNovoPacienteTd.textContent = pesoNovoPaciente;
    alturaNovoPacienteTd.textContent = alturaNovoPaciente;
    percGorduraNovoPacienteTd.textContent = percGorduraNovoPaciente;
    imcNovoPacienteTd.textContent = calculaIMC(pesoNovoPaciente, alturaNovoPaciente);

    novoPacienteTr.appendChild(nomeNovoPacienteTd);
    novoPacienteTr.appendChild(pesoNovoPacienteTd);
    novoPacienteTr.appendChild(alturaNovoPacienteTd);
    novoPacienteTr.appendChild(percGorduraNovoPacienteTd);
    novoPacienteTr.appendChild(imcNovoPacienteTd);

    var tabela = window.document.querySelector("#infos-pacientes");
    tabela.appendChild(novoPacienteTr);
});