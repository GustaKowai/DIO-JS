/*console.log('TypeScript')

function soma(a: number, b: number){
  return a + b;
}

soma(3,4); 

//aula interface:

interface IAnimal{
  nome: string;
  tipo: 'terrestre'|'aquático';
  domestico: boolean;
}

interface IFelino extends IAnimal{
  visaonoturna: boolean;
}

const animal: IAnimal = {
  nome:'Tartauga',
  tipo: 'aquático',
  domestico: true,
}

const gato: IFelino = {
  nome:'Atsushi',
  tipo:'terrestre',
  domestico: true,
  visaonoturna: true,
}

//aula type:

interface ICanino extends IAnimal{
  porte: 'pequeno'|'médio'|'grande';
}

type TDomestico = IFelino | ICanino

const animaldomestico : TDomestico = {
  domestico: true,
  nome: 'cachorro',
  porte: 'médio',
  tipo: 'terrestre',
}
*/
//aula input

const input = document.getElementById('input') as HTMLInputElement;
input.addEventListener('input',(event) => {
  console.log(input.value);
  const i = event.currentTarget as HTMLInputElement;
  console.log(i.value); //faz basicamente o mesmo do que o de duas linhas acima.
  //console.log(event.currentTarget.)
});