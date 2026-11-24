 /*Menu Interativo
Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.*/
 
 let escolha;

do{
     escolha = prompt("Escolha uma das opções:\n1- Inicio\n2-Menu\n3-Ambiente\n4-Fale Conosco\n5-Encerrar")
   
    if (escolha === "1"){
        alert("Pagina inicial")
    } else if (escolha === "2"){
        alert("Conheça nosso menu")
    }else if(escolha === "3"){
        alert("Coneça nossos ambientes")
    }else if(escolha === "4"){
        alert("Contatos")
    }

} while(escolha !== "5")
    alert("Programa finalizado!")