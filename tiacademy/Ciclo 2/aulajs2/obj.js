
/*
	var / ler const

*/
/*
var nome="Helen"; //var global
let sobreNome = "Mazzer";

if(true){
	console.log("var nome = "+ nome);
	var nm = nome;
	console.log("Chamando o sobreNome" + sobreNome);
	let sn = "Moreira";
	console.log(sobreNome);
}

console.log("Meu nome é " +nm+ "sobreNome" +sn);
console.log("var nome = " +nm);
*/

var Pessoa = {
	nome: "Helen",
	rua: "Rua daqui",
	ncasa: "001",
	dados: function(){
		document.write(
			"Nome...:"+this.nome+"<br>"+
			"Rua..." +this.rua+"<br>"+
			"N. casa...:"+this.ncasa+"<br>")}
}


Pessoa.dados();

/*console.log("Nome:" +Pessoa.nome+ " Endereço:" +Pessoa.rua+ " N. " +Pessoa.ncasa);*/
















