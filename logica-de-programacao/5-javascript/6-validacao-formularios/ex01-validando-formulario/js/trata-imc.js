function calculaIMC(peso, altura) {
    var imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function verificaPeso(peso) {
    if(peso <= 0 || peso >= 700) {
        return false;
    }
    return true;
}

function verificaAltura(altura) {
    if (altura <= 0 || altura >= 2.70) {
        return false;
    }
    return true;
}

function verificaIMCPaciente(paciente) {
    var pesoPaciente = paciente.querySelector(".info-peso").textContent;
    var alturaPaciente = paciente.querySelector(".info-altura").textContent;

    var peso = verificaPeso(pesoPaciente);
    var altura = verificaAltura(alturaPaciente);

    if(peso && altura) {
        return calculaIMC(pesoPaciente, alturaPaciente);
    } else if(!peso) {
        paciente.classList.add("peso-invalido");
        return "Peso inválido";
    } else if(!altura) {
        paciente.classList.add("altura-invalida");
        return "Altura inválida";
    }
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
