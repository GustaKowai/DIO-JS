function changeMode(){
  changeClasses();
  changeText();
}
function changeClasses(){
  btndrkmode.classList.toggle(drkmodeclass);
  body.classList.toggle(drkmodeclass);
  footer.classList.toggle(drkmodeclass);
  h1.classList.toggle(drkmodeclass);
}
function changeText(){
  if(body.classList.contains(drkmodeclass)){
    btndrkmode.innerHTML = 'Light mode'
    h1.innerHTML = 'Dark mode ON'
  }else{
    btndrkmode.innerHTML = 'Dark mode'
    h1.innerHTML = 'Light mode ON'
  }
  
}

const body =  document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const h1 = document.getElementById('page-title');
const btndrkmode = document.getElementById('mode-selector');
const drkmodeclass = 'dark-mode';

btndrkmode.addEventListener('click', changeMode);