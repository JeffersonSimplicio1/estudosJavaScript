/*Controle Financeiro
Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa. */

const quantidadeInicial = prompt("Digite o valor inicial da conta: ")

let valor = parseFloat(quantidadeInicial)
let opcao;
do{
    opcao = prompt("O valor disponivel na conta é: " + valor + "\n1- Adicionar valor.\n2-Sacar valor.\n3-Sair")

    switch(opcao){
        case "1":
            let adicionarValor = prompt("Valor Disponivel" + valor +"\nDigite o valor a ser adicionado: ")
            adicionarValor = parseFloat(adicionarValor)
            valor += adicionarValor
            alert("Saldo Atualizado: " + valor) 
            break;

        case "2":
            let sacarValor = prompt("Valor Disponivel: " + valor +"\nDigite o valor a ser sacado: ")
            sacarValor = parseFloat(sacarValor)
            if (sacarValor > valor){
                alert("Saldo indisponivel")
            }else{
            valor -= sacarValor}
            alert("Saldo Atualizado: " + valor) 
            break;
        
        case "3": 
            alert("Programa Finalizado!!")
            break;
        default:
            alert("Oção Invalida!")

    }

}while (opcao !== "3");