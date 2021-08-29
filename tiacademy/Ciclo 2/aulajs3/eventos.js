/* click Ao clicar em algum elemento HTML
 mouse Ao mover o cursor do mouse acessa (entra) o elemento
 mousemove Ao mover o cursor do mouse dentro do elemento
 mousemove Ao mover o cursor para fora do elemento
 dblclick AO efetuar do duplo click (rápido) sobre o elemento
 blur Ao perder o foco do elemento, geralmente associado ao elemento HTML text
 */
window.onload = function(){


	//alert("alerta");


	const btn1 = document.querySelector(".btn-click");
	const legP = document.querySelector(".legenda");
	const cxTexto = document.querySelector("#texto");


	/*click Ao clicar em algum elemento HTML */

	btn1.addEventListener('click', ()=>{
		//escrever o elemento
		legP.innerHTML += cxTexto.value;

	});
	
cxTexto.addEventListener('click', ()=>{

	legP.innerHTML = '';
});


/*mousemove Ao mover o cursor do mouse acessa (entra) o elemento*/
/*leP.addEventListener('mouseout', ()=>{

	alert("Teste")
})*/

/*TROCAR TIPO DE ELEMNTO*/

const trocaSenha = document.querySelector("#verSenha");
const cxSenha = document.querySelector("#senha");

trocaSenha.addEventListener('click', ()=>{
	//getAttribute()
	//setAttribute()

	  if(cxSenha.getAttribute("type") == "password"){
        cxSenha.setAttribute("type", "text")
    } else {
        cxSenha.setAttribute("type", "password")
    }  

    });

    // alterar background

    const cxTrocaBg = document.querySelector("#cxTbg");
    // blur quando desfocar desparar uma ação

        cxTrocaBg.addEventListener("blur", ()=>{
        cxTrocaBg.setAttribute("class", "corBg");
    });

    //somar valores cx input text

    const valor1 = document.querySelector("#v1");
    const valor2 = document.querySelector("#v2");
    const btnSomar = document.querySelector("#soma");
    const spResultado = document.querySelector("#resultado");


    btnSomar.addEventListener("click", ()=>{
        var cx1 = valor1.value;
        var cx2 = valor2.value;
        var r = Number(cx1) + Number(cx2);

        spanResultado.innerHTML = r;
    });

    // EVENTO MODAL
    
    const btnModal = document.querySelector("#chamarModal");
    const janelaM = document.querySelector("#janModal");
    const closeMod = document.querySelector("#fechaModal");
    
    btnModal.addEventListener("click", ()=>{
    janelaM.setAttribute("class", "modal");
    });

    janelaM.addEventListener('click', ()=>{


    	janelaM.classList.remove("modal");

    })

}