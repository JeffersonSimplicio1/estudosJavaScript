/*  SWITCH


*/

const ano = new Date().getFullYear()
const hoje = new Date();
let resposta = "ano"
switch(resposta){
    case "saudacao":
        console.log("Olá")
        break;
    case "ano":
        console.log("Estamos no ano de: " + ano)
        break;
    case "data":
        console.log(hoje)
        break;
}