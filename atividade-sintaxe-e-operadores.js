//essa atividade irá comparar dois números e retornar se são iguais, e se a soma é menor do que 10 e/ou menor do que 20.
function comparar (numero1,numero2){
  let igual = numero1 == numero2 ? '' : 'não';
  if (numero1 + numero2  > 20){
     comp20 = 'maior';
     comp10 = 'maior';
  }else{
      if (numero1 + numero2 > 10){
        comp20 = 'menor';
        comp10 = 'maior';
      }else{
        comp20 = 'menor';
        comp10 = 'menor';
    }
  }
  return `os números ${numero1} e  ${numero2} ${igual} são iguais. A soma é ${comp10} que 10 e ${comp20} que 20`;
}

console.log(comparar(15,15));