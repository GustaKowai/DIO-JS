let valorAny:any;
valorAny = 3;
valorAny = 'Ola';
valorAny = false;

let valorString:string = 'teste'

valorString = valorAny
let valorString2:string = 'testando';

valorString2 = valorAny


function somarString(string1:string, string2:string){
  console.log(string1+string2)
}

somarString(valorString,valorString2);