const maca = {
  valor: 2,
}
const laranja = {
  valor: 3,
}


function mapThis(entrada,thisArg){
  return entrada.map(function(item){
    return item*this.valor;
  }, thisArg)
}

const nums = [1,2];

console.log(mapThis(nums,maca));
console.log(mapThis(nums,laranja));

function mapNoThis(entrada){
  return entrada.map(function(item){
    return item*2;
  }); 
}

const numeros = [1,2,3,4,5]
console.log(mapNoThis(numeros));
console.log(mapNoThis(nums));