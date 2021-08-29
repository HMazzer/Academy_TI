/*
Desafio - Aula 2 "JS"
*/

alert("Uma string foi enviada");

alert("Uma string será convertida em número");

var teste = prompt("Digite seu nome");

var numero = prompt("Num");


var valor1 = parseInt(numero);

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
if (valor1 >0){document.write("Esse valor é inteiro" + "<br/>")}
document.write("Comparação Booleana...:" + v + "<br/>"); //imprime na tela
document.write("A soma dos valores é...:" + total + "<br/>"); //imprime na tela
document.write ("O resto da divisão é de...:" + total2 + "<br/>"); //imprime na tela
document.write ("O quadrado do número digitado é...:" + total3 + "<br/>"); //imprime na tela



var fruta = prompt("Escolha uma fruta: Pera, Maçã, Morango, Uva");
console.log(fruta);

switch(fruta){
case "Pera":
	alert("Você escolheu Pera");
break

case "Maçã":
	alert("Você escolheu Maçã");
break

case "Morango":
	alert("Você escolheu Morango");
break

case "Uva":
	alert("Você escolheu Uva");
break

default:
alert("A fruta escolhida não está na lista")
}





