function arrayNumero(array,numero){
  try{
    if(!array && !numero) throw new ReferenceError ('Envie os parâmetros.');

    if(typeof array !== 'object') throw new TypeError ('O primeiro parâmetro deve ser um array.');

    if(typeof numero !== 'number') throw new TypeError('O segundo parâmetro deve ser um número.');

    if(array.length !== numero) throw new RangeError('O tamanho do array deve ser o mesmo do número enviado.');

    return array
  }catch(e){
    if(e instanceof ReferenceError){
      console.log('ReferenceError!');
      console.log(e.message);
    }else if(e instanceof TypeError){
      console.log('TypeError!');
      console.log(e.message);
    }else if(e instanceof RangeError){
      console.log('RangeError!');
      console.log(e.message);
    }else{
      console.log('Erro não identificado.');
      console.log(e.stack);
    }
  }
}

console.log(arrayNumero([1,2],3));