window.onload = function(){

	function resultadoCampos(dataCep){

		for(let campo in dataCep){

				if(document.querySelector("#"+campo)){

					document.querySelector("#"+campo).value=dataCep[campo]
		}

	}

}

	const dadosCep = async function(cep){

		var url = `https://viacep.com.br/ws/${cep}/json`;
		try{

				var dadosGFetch = await fetch(url);
				console.log(dadosGFetch.status);
				console.log(dadosGFetch.erro);
				var dadosJson = await dadosGFetch.json();
				console.log(dadosJson);dadosGFetch