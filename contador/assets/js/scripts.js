var currentNumberWrapper = document.getElementById('currentNumber')
var addButton = document.getElementById('addButton')
currentNumber = 0;
function increment() {
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
  if (currentNumber >= 0){
    currentNumberWrapper.style.color = 'black'
  }
  if (currentNumber >= 10){
    addButton.style.display = "none"
  }
}

function decrement() {
  currentNumber = currentNumber - 1;
  currentNumberWrapper.innerHTML = currentNumber;
  if (currentNumber < 0 ){
    currentNumberWrapper.style.color = 'red'
  }
  if (currentNumber < 10){
    addButton.style.display = 'block'
  } 
}