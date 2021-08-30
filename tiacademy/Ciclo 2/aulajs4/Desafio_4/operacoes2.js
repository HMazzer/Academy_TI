window.onload=function(){

	(()=>{
		let mostrarProdutoCliente = document.querySelector("#content-produtos > ul#produtos");

		for(let i in produtos ){

			mostrarProdutoCliente.innerHTML+=`<li class=itemProduto data-preco=${produtos[i].prodPreco}>${produtos[i].prodDesc}</li>`



		} 

	


	})(produtos)


	//compra
	const itemProduto = document.querySelectorAll("#produtos > li.itemProduto");

	const cestaDoCliente = document.querySelector("ul#cestaDoCliente");

	const mostraTotalCompra = document.querySelector("#mostraTotalCompra");

	var ItemFruta

	var armazenaItens = [];

	var totalPedido=0;

	itemProduto.forEach((item)=>{

		item.addEventListener('click', ()=>{
			li = document.createElement('li');
			li.className = 'itemFruta'; 
			li.dataset.precos = item.dataset.precos;

				if(armazenaItens.indexOf(item.textContent) == -1){
					armazenaItens.push(item.textContent);

				"cestaDoCliente .appendChild(li).textContent=item.textContent;"
				itemFruta = cestaDoCliente.appendChild(li);
				itemFruta.textContent = item.textContent;

				itemFruta.addEventListener('click', (foco)=>{
					armazenaItens.splice(armazenaItens.indexOf(foco.target.textContent),1);
					cestaDoCliente.removeChild(foco.target);
					totalPedido-= Number(foco.target.dataset.precos);
					mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR',
						{style:'currency',currency:'BRL'});
				});


					totalPedido+=Number(item.dataset.preco); 

					mostraTotalCompra.value=totalPedido.toLocaleString('pt-BR',
						{style:'currency',currency:'BRL'});

				}else{
					alert(`Esta item ${item.textContent} já está na sua cesta`);
				};


			});

	});