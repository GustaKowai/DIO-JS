function printaValoresNumericos(numero1:number, numero2:number):void{
  console.log(numero1+numero2)
}

function somaValoresNumericosEtratar(numero1:number, numero2:number, callback?: (numero:number) => number ):number{
  let resultado =  numero1+numero2;
  if(callback){
    return callback(resultado);
  }
  return resultado
}

function aoQuadrado (numero:number):number{
  return numero*numero;
}

function dividirPorEleMesmo(numero:number):number{
  return numero/numero
}

console.log (somaValoresNumericosEtratar(1,3, aoQuadrado))

console.log (somaValoresNumericosEtratar(1,3, dividirPorEleMesmo))

console.log (somaValoresNumericosEtratar(1,3))