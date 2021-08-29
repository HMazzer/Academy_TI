window.onload=function(){


	const pai = document.querySelectorAll("#pai");

	pai.forEach((pegarFilhas)=>{

		pegarFilhas.addEventListener('click', (filha)=>{

			alert(filha.target.textContent);

		})

	})


	const btn = document.querySelector("#btn");
	const outroPai = document.querySelecto("#outroPai")
	//var i=0
	btn.addEventListener('click', ()=>{

		li = document.createElement("li");

		outroPai.appendChild(li).textContent ="Elemento Filho" +i;
		//li.sentAttribute("class", "itemDaLista")

		//i++
})




}