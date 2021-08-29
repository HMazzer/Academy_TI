/*

Estrutura de condições e operadores

lógicos
==
===
!=
!==
<
>
<=
>=
*/

//( == ) igualdade
/*
var v1=1;
var v2=1;
if (v1 == v2){
console.log ("Sim é verdade");
}else {
console.log("Isto é falso");
}*/




//(===) identico
/*
var v3=1;
var v4;
if (v3 === v4){
console.log("V3 é exatamente igual a V4");
} else {
console.log("V3 não é igual V4")
console.log(V4);
}*/

/*
var v3=1;
var v4=1;
if (v3 === v4){
console.log("V3 é exatamente igual a V4");
console.log(typeof(v4));
} else {
console.log("V3 não é igual V4");
console.log(typeof(V3));
}*/





//(!=)diferente
/*
var v5;
var v6;

if(v5 !=v6){
console.log("V5 é diferente de V6");
} else {
console.log("São iguais");
}*/





//(!==) Estritamente diferente
/*
var v7=1;
var v8='1';
if(v7 !== v8) {
console.log ("Exatamente diferente");
} else {
console.log ("São iguais");
}*/





//(<) menor que
/*
var va=200;
var vb=400;
if(va < vb){
console.log ("Sim va é menor que vb");
}*/






//(>) maior que 
/*
var va=400;
var vb=1;
if(va > vb){
console.log ("Sim va é maior que vb");
}*/






//( <= ) menor ou igual que
/*
var vc=400;
var vd=399;
if(vc <= vd){
console.log("Vc="+ vc + " é menor ou igual a Vd=" +vd);
}*/





//( >= ) menor ou igual que
/*
var ve=400;
var vf=444;
if(ve >= vf){
console.log("ve="+ ve + " é menor ou igual a vf=" +vf);
}*/





/* if / else e Operadores Lógicos

AND 'E'        lógico (&&)  E comercial
OR 'OU'        lógico (||)  pipe/pipe
NOT 'NEGAÇÃO   lógico (!)   exclamação*/

//&& Todas as condições precisam ser atendidas
/*
var a=0;
var b=0;
if (a==0 && b==0){
console.log("verdadeiro");
} else{
console.log("falso");
}*/





//|| Alguma das condições precisam ser atendidas
/*
var c=0;	
var d=0;
if (c==1 || d==1) {
console.log("Ok");
} else{
console.log("!Ok");
}*/

/*
var s = 1;
if(!typeof(s)){
console.log("Não é uma string");
} else {
console.log("É uma string");
console.log(typeof (s));
}*/





//switch

var op=10;

switch(op){


case 1:
	alert("Estou sendo enviado pelo case1");
break;

case 2:
	console.log("Cai dentro do case 2");
break;

case 3:
	console.log("Cai dentro do case 3");
break;

default:
console.log("Nenhuma das opções");
break;

}






