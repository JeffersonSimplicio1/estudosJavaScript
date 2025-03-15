//Faça um programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

const valor = prompt("Qual o valor da hora de trabalho?");
const valorHora = Number(valor);

const horas = prompt("Qual o numero de horas trabalhadas no mês? ");
const horasTrabalhadas = Number(horas);

const calculoDeHoras = valorHora * horasTrabalhadas;

window.alert(calculoDeHoras);
