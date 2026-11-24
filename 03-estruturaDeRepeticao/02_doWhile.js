/* Do While 
    Do while é muito parecido com o while, porém este permite que o bloco seja executado pelo menos uma vez. 
*/


 let velocidade = 0;

 do{
    console.log("Velocidade do veiculo é: " + velocidade + " Km/h");
    if(velocidade < 160){
        console.log ("Acelerando...")
    }
    velocidade += 10;
 } while(velocidade < 170)
    console.log("...\nVeiculo atingiu a velocidade maxima!!!")


let sentenca = false
do {
    console.log("Repetir se a sentença for verdadeira ")
} while(sentenca == true)