function load(){
  alert("pagina carregada");
}
function funcaoChange(elemento){
  console.log(elemento.value);
}
function trocar(elemento){
  elemento.innerHTML="Isso, assim mesmo.";
}
function sair(elemento){
  elemento.innerHTML="Não, não pare.";
}
function notThere(elemento){
  elemento.innerHTML="Ai, assim não ~ ";
}

function hover(){
  document.getElementById("agradecimento").innerHTML = "<b>Vai, clica...</b>";
  }
function clicou(){
 // alert("Obrigado por clicar.");
  document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar.</b>";
 // console.log(document.getElementById("agradecimento"));
}
function redirecionar(){
  window.open("https://twitter.com/home");  //<- Esse abre em uma nova janela
  //window.location.href = "https://twitter.com/home";  // <- Esse abre na mesma janela
}
/*function validaIdade(idade){
  if(idade>=18){
    var validar = true;
  }else{
    var validar = false;
  }
  return validar;
}

var idade = prompt("Qual a sua idade?");
console.log (validaIdade(idade));

*/

/*function soma(n1,n2){
  return n1+n2;
}


function setReplace(frase,nome,novo_nome){
  return frase.replace(nome,novo_nome)
}
alert(setReplace("Vai Japão","Japão", "Brasil"));


*/
//Primeira aula:
/*var d = new Date;
alert(d.getMonth());
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
alert(d.getSeconds());
*/

/*var count;
for(count = 0; count<=5; count++){
  alert(count);
}
*/
/*
var count = 0;
while (count<=5){
  console.log(count);
  count ++;
};
*/

/*
var idade = prompt("Qual a sua idade?");
if (idade >= 18){
  alert("Maior de idade");
}else{
  alert("menor de idade");
}
;
*/


//Segunda aula:
/*var frutas = [{
  nome:"maça",
  cor:"vermelha"
},
{
  nome:"uva",
  cor:"roxa"
},
{
  nome:"limão",
  cor:"verde"
},
];
console.log(frutas);
*/
/*var fruta = {
  nome:"maça",
  cor:"vermelha"
};

console.log(fruta.cor);*/

/*var lista = ["maçã", "pêra", "laranja"];
console.log(lista);
lista.push("uva");
console.log(lista);
lista.pop();
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" "));*/



//Primeira aula:
/*var nome = "Gustavo Gregorio";
var idade = 28;
var idade2 = 10;
var frase = "Japão é nice."
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2)
console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Japão","Brasil"));
alert(frase.replace("Japão","Brasil"))*/