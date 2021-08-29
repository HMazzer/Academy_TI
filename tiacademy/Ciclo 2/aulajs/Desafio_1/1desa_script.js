
/*
Desafio - Aula 1 "JS"
*/


var teste = prompt("Digite seu nome");

var numero = prompt("Num");

var valor1 = parseInt('20');
var valor2 = 20

var v = (valor1==valor2);

var total = valor1 + valor2;
console.log(total);

var total2 = valor1 % valor2;
console.log(total2);

var total3 = valor1**2;
console.log(total3);

document.write("Seja bem vinda...:" + teste + "<br/>"); //caixa de entrada
document.write("Você digitou o número...:" + numero + "<br/>"); //imprime na tela
document.write("Comparação Booleana...:" + v + "<br/>"); //imprime na tela
document.write("A soma dos valores é...:" + total + "<br/>"); //imprime na tela
document.write ("O resto da divisão é de...:" + total2 + "<br/>"); //imprime na tela
document.write ("O quadrado do número digitado é...:" + total3 + "<br/>"); //imprime na tela
