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
