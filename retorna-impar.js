function returnOddValues(array){
  let oddNums = [];
  for(let i = 0; i < array.length; i++ ){
    if(array[i] % 2 === 1){
      oddNums.push(array[i]);
    }
  }
  console.log('os números ímpares são: ' , oddNums);
}

let array = [1,2,4,5,7,8];

returnOddValues(array);