/*Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.*/

const nome = prompt('Digite o seu nome: ');
const cidadeVisitadas = [];

let jaVisitou = prompt("Você ja visitou alguma cidade (sim/ nao)?").toLowerCase(); 

while(jaVisitou === "sim"){
    const nomeCidade = prompt("Qual? ");
    cidadeVisitadas.push(nomeCidade);

    jaVisitou = prompt("Visitou mais alguma cidade (sim/ nao)?").toLowerCase(); 
}

console.log(cidadeVisitadas)
alert(nome +"\n"+ cidadeVisitadas)
