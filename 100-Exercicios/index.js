console.log("Olá mundo");

// const nome = "Jefferson";
// console.log(nome);
// console.error("Mensagem de erro");
// console.warn("Mensagem de alerta");

// window.alert(nome);
let nome2 = window.prompt("Digite seu nome: ");


let confirmacao = window.confirm("Seu nome é " + nome2 + "?");


if (confirmacao){
    window.alert("Bem vindo, " + nome2 + "!");
} else {
    window.alert("Recarregue a página e digite seu nome novamente");
}
