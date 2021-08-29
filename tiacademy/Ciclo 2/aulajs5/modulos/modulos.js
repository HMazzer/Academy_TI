	const msgLog = function(msg=''){

	try{
		if(msg.length <= 6) {throw "Digite uma mensagem válida"};
	
		alert(msg)



	}	catch(err){
			alert(`Erro: ${err}`);
	}
}


const Produtos = [{ cosdigoProdutos: 1, descProduto: "Mesa", precoProduto: 890.00}]


export {msgLog, Produtos}