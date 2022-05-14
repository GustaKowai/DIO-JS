function palindromocheck(palavra){
//let palavra = new String("20102");
palindromo = ""
for(let i = 0; i<palavra.length/2; i++){
  if(palavra[i] != palavra[palavra.length-i-1]){
    palindromo = " não"
  }
}
console.log(`${palavra}${palindromo} é palíndromo.`)
}

let palavra = new String("carro");
palindromocheck(palavra);