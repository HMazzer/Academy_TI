

/*Desafio da Aula*/

window.onload=function(){

	//escrevendo valores
	
        const valor1 = document.querySelector("#v1");
        const valor2 = document.querySelector("#v2");
        const btnSomar = document.querySelector("#soma");
        const spResultado = document.querySelector("#resultado");


    spResultado.addEventListener("click", ()=>{
        var cx1 = valor1.value;
        var cx2 = valor2.value;
        var Soma = btnSomar.value;
        var r = Number(cx1) + Number(cx2);

        if(Soma==r){
            alert("Você está correto");
            } else{ alert("Você errou");
            }
             
    })
}

      