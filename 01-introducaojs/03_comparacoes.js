/*Os operadores de comparação servem para comparar valores. O resultado de uma comparação sempre é um valor booleano:
    == Igual (Operador não se importa com os tipos primitivos)
    === Igual (Correto a se usar pois se importa com os tipos de dados)
    != Diferente (Segue os principios acima)
    !== Diferente
    > Maior 
    < Menor
    >= Maior ou Igual
    <= Menor ou igual

*/

console.log(5 == "5") //Apesar de um int e uma string o console retorna True devido ao tipo de comparação 
console.log(5 === "5") //Nesse caso retornará false, devido ao tipo de comparador. Nesse caso ele se importa com o tipo primitivo diferenciando string de num
console.log(5 != "5") // Informa um false apesar de ser tipos primitivos diferentes
console.log(5 !== 5)
console.log(5 > 6)
console.log(5 < 6)