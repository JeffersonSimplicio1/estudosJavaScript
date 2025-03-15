const numeroUm = prompt("Escreva o primeiro numero sendo ele inteiro: ");
const numeroDois = prompt("Escreva o segundo numero sendo ele inteiro: ");
const numeroTres = prompt("Escreva o terceiro numero sendo ele real: ");

const primeiroNumero = Number(numeroUm);
const segundoNumero = Number(numeroDois);
const numeroReal = Number(numeroTres);

const calculoUm = (primeiroNumero**2) * segundoNumero / 2;

const calculoDois = primeiroNumero**3 + numeroReal;

const  calculoTres = numeroReal**3;

window.alert = ("O valor do produto do dobro do primeiro com metade do segundo é: "+ calculoUm);
window.alert = ("A soma do triplo do primeiro com o terceiro é: " + calculoDois);
window.alert = ("O terceiro elevado ao cubo é: "+calculoTres);
