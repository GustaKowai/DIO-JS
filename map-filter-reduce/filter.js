function filtraPares (entrada){
  return entrada.filter(callBack);
}

function callBack(item){
  return item%2 ===0;
}

const meusNumeros = [1, 23, 55, 67, 8 ,19,23, 10 , 8 , 22, 4, 9]

console.log(filtraPares(meusNumeros));

//Depois tentar fazer filtros diferentes!!