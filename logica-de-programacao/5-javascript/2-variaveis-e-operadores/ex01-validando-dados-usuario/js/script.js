function calculaIMC(peso, altura) {
    imc = peso / altura ** 2
    return imc.toFixed(2);
}

function verificaIMCPaciente(paciente) {
    var pesoPaciente = paciente.querySelector(".info-peso").textContent;
    var alturaPaciente = paciente.querySelector(".info-altura").textContent;

    if(pesoPaciente > 0 && pesoPaciente < 700 &&
        alturaPaciente > 0 && alturaPaciente < 2.70) {
        return calculaIMC(pesoPaciente, alturaPaciente);
    }
    return "IMC inválido";
}

var tituloPrincipal = window.document.querySelector(".titulo-principal");
tituloPrincipal.textContent = "Tathi Nutricionista";

var listaIDPacientes = ["#paciente-1", "#paciente-2", "#paciente-3", "#paciente-4", "#paciente-5"];
var listaPacientes = [];
var listaIMCPacientes = [];
var listaTextoIMCPacientes = [];

for(var i =  0; i < listaIDPacientes.length; i++) {
    listaPacientes.push(window.document.querySelector(`${listaIDPacientes[i]}`));
    listaIMCPacientes.push(verificaIMCPaciente(listaPacientes[i]));
}

for(var i =  0; i < listaPacientes.length; i++) {
    listaTextoIMCPacientes.push(listaPacientes[i].querySelector(".info-imc"));
    listaTextoIMCPacientes[i].textContent = listaIMCPacientes[i];
}

/*
var paciente1 = window.document.querySelector("#paciente-1");
var pesoPaciente1 = paciente1.querySelector(".info-peso").textContent;
var alturaPaciente1 = paciente1.querySelector(".info-altura").textContent;
var imcPaciente1 = paciente1.querySelector(".info-imc");

imc = calculaIMC(pesoPaciente1, alturaPaciente1);

imcPaciente1.textContent = imc;
*/