const arrayTeste = [30, 30, 40, 5, 223, 2049, 3034];

function removeRepetido(array){
  const semRepetido = new Set (array); //No set não temos elementos repetidos.
  return[...semRepetido]; //Assim eu faço um spread dos elementos e os coloco em um array!
}

console.log(removeRepetido(arrayTeste));