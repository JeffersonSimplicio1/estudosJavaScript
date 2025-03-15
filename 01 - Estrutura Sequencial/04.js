//Faça um Programa que peça as 4 notas bimestrais e mostre a média.

const nota1 = prompt("Digite a primeira nota: ");
const nota2 = prompt("Digite a segunda nota: ");
const nota3 = prompt("Digite a terceira nota: ");
const nota4 = prompt("Digite a quarta nota: ");

const primeiraNota = Number(nota1);
const segundaNota = Number(nota2);
const terceiraNota = Number(nota3);
const quartaNota = Number(nota4);

const media = (primeiraNota + segundaNota + terceiraNota + quartaNota)/4;

console.log(media);