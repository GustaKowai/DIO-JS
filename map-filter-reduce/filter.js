function filtraPares (entrada){
  return entrada.filter(callBack);
}

function callBack(item){
  return item%2 ===0;
}

function filtraMultiplosde5 (entrada){
  return entrada.filter(multiplo5);
}

function multiplo5(item){
  return item%5 ===0;
}

const meusNumeros = [1, 23, 55, 67, 8 ,19,23, 10 , 8 , 22, 4, 9]

console.log("Os numeros multiplos de 5 são " + filtraMultiplosde5(meusNumeros));
console.log("Os números pares são " + filtraPares(meusNumeros));