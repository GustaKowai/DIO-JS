function palindromocheck(palavra){
  if(!palavra) return "string inexistente"; //checa se a palavra foi escrita.
  console.log(!palavra)
  palindromo = ""
  for(let i = 0; i<palavra.length/2; i++){
    if(palavra[i] != palavra[palavra.length-i-1]){
      palindromo = " não"
    }
  }
  console.log(`${palavra}${palindromo} é palíndromo.`)
}

function palindromocheck2(palavra){
  if(!palavra) return "string inexistente";
  simnao = ""
  checagem = palavra.split("").reverse().join("") == palavra; //Nesse caso uso apenas == pois a variavel palavra é um object e depois do join a outra vira uma string.
  if(!checagem) simnao = " não"
  console.log(`${palavra}${simnao} é palíndromo.`)
}
let palavra = "2002"
palindromocheck(palavra);
palindromocheck2(palavra);