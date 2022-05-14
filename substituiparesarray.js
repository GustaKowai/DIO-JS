function tirapares (array){
  if(!array) return -1
  if(!array.length) return -1

  //console.log(array.length);
  for (let i = 0; i < array.length; i++){
    if (array[i] != 0){
      if(array[i]%2 === 0){
        array[i] = 0;
      }
    }
  }
  return array;
}
let arr = [1,5,3,0,5,6];
console.log(tirapares(arr));