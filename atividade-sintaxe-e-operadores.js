//essa atividade irá comparar dois números e retornar se são iguais, e se a soma é menor do que 10 e/ou menor do que 20.
function comparar (numero1,numero2){
  let igual = numero1 == numero2 ? '' : 'não'; //treinar o uso do operador ternário.
  if (numero1 + numero2  > 20){   // Aqui compara se é maior que 20. Por lógica, se for maior que 20 também é maior que 10.
     comp20 = 'maior';
     comp10 = 'maior';
  }else{
      if (numero1 + numero2 > 10){ //Se entrar aqui, com certeza é menor que 20, então é só comparar com 10.
        comp20 = 'menor';
        comp10 = 'maior';
      }else{
        comp20 = 'menor';
        comp10 = 'menor';
    }
  }
  return `os números ${numero1} e  ${numero2} ${igual} são iguais. A soma é ${numero1+numero2},  ${comp10} que 10 e ${comp20} que 20`;
}

console.log(comparar(15,15));