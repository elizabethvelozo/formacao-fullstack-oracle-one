function pulaLinha() {
    window.document.write("<br>");
}

function exibeNaTela(receita) {
    for(var i = 0; i < receita.length; i++) {
        window.document.write(receita[i]);
        pulaLinha();
    }
}

function checaRepeticaoIngredientes() {
    var contador = 1;
    while(contador <= qtdeIngredientes) {
        var ingrediente = window.prompt("Informe o ingrediente: ");

        var ingredienteRepetido = false;
        for(var i = 0; i < receita.length; i++) {
            if(ingrediente == receita[i]) {
                window.alert("O ingrediente já consta na lista.");
                ingredienteRepetido = true;
                break;
            }
        }
        if(!ingredienteRepetido) {
            receita.push(ingrediente);
            contador++;
        }
    }
    return receita;
}

var receita = [];
var qtdeIngredientes = parseInt(window.prompt("Quantos ingredientes você vai adicionar? "));
receita = checaRepeticaoIngredientes();
exibeNaTela(receita);