var capacidadeTanque = 40;
var viagemGasolina = 480;
var viagemAlcool = 300;

var consumoGasolina = viagemGasolina / capacidadeTanque;
var consumoAlcool = viagemAlcool / capacidadeTanque;

window.document.write(`O carro consome ${consumoGasolina} km/l de gasolina e ${consumoAlcool} km/l de álcool.`);