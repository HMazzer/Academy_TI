/* var nome = "Marcelo";while
console.log(nome.length);
console.log(nome[0]);//M */


/*match()
O método match procura uma palavra em uma string.
Existm alguns parâmetros de pesquisa que permite uma maior precisão conforme a nomenclatura da flags g/i/m



var palavras ="Maçã doce";


 //console.log( palavras.match(/D/gi));


/*search ()
O método search()procura pela ocorrência e retorno a posição na cadeia da string, a posição é me relação ao pirmeiro caractere da ocorrência.*/



//console.log( palavras.search(/d/gi));



/*replace()
Este método substitui uma string por outra, simples assim,
ele pesquisa a string informada, como no método "match" e a 
substitui por outra string nas aspas informada como segundo parâmetro. */



/*var str = "Lorem ipsum dolor sit amet consectetur adipisicing " + 
"elit. Provident quisquam, repudiandae incidunt fugiat" 

var mudarStr = str.replace(/e/gi, 'x');
console.log(mudarStr);*/





/*localeCompare( )
O método localeCompare compara efetua a caomparação entre duas strings,
se estas forem iguais o retorno será "0" zero. Os valores -1 e 1 podem ser 
esperados caso elas não sejam iguais.
*/

/*
var comp1 = "Comparar";
var comp2 = "Comparar";

var c1 = comp1.toLowerCase();
var c2 = comp2.toLowerCase();
*/
//console.log(`Este é o c1: ${c1} Este é o c2 ${c2}`);

/*var comparacao = c1.localeCompare(c2);
console.log(comparacao);*/

/*trim()
Faz a remoção de espaços antes e depois da string especificada.
*/

var p = ' fpalavra+ ';

var r = p.trim();
console.log(r);
var s = r.replace(/f/gi, '');
console.log(s);
sub_a = s.replace('+', ''); //remover e substitir o sinal de +
console.log(`Removido: ${sub a}`);

// toLocaleString
//formatação de moedas

var valor = 1.35 // 1,35;
var formatarMoeda = valor.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

console.log (formatarMoeda);
