/*Estrutura condicional If e Else

    Estrutura que permite o programa seguir por caminhos diferentes a depender da condição empregada a ele. No exemplo abaixo estou condicionando a possibilidade de um individuo poder tirar a carteira da motorista a sua idade. Nesse caso, se por ventura ele for maior ou igual a 18 anos, ele podera tirar a carteira, se for menor que 18 e maior ou igual a 16 anos, poderar tirar a carteira, caso seja emanciapado. E se for menor que 16 não poderar tirar a carteira de maneira nenhuma.

    a estrutura if e Else, conta tambem com o else if, que possibilita a adição de outras condições para que o programa possa seguir.

*/

const anoNascimento = 2009;
const anoAtual = new Date().getFullYear();

let idade = anoAtual - anoNascimento;

if (idade >= 16 && idade < 18 ){
    console.log(`Você precisa de emanciapação para poder tirar a carteira de motorista!\nidade: ${idade}`);
} else if( idade >= 18){
    console.log("Você esta autorizado a tirar a carteira de motorista!\n" + "idade: " + idade);
} else {
    console.log(`Você é muito novo para tirar a carteira de motorista!\nidade: ${idade}`);
}