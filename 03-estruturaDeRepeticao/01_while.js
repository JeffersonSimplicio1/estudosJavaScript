/* - While

Serve para criar laços de repetições enquanto uma condição for verdadeira.

OBS: é importante que sempre exista uma forma da condição ser tornar falsa, caso não exista essa possibilidade o lao pode se tornar infinito.
*/

velocidade = 80
while (velocidade > 0){
    console.log('O carro esta com velocidade de ' + velocidade + " Km/h");
    velocidade -= 20;
    console.log("Diminuindo 20 km/h")
}
console.log('O carro parou!')