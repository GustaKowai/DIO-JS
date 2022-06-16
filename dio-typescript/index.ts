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
/*
const input = document.getElementById('input') as HTMLInputElement;
input.addEventListener('input',(event) => {
  console.log(input.value);
  const i = event.currentTarget as HTMLInputElement;
  console.log(i.value); //faz basicamente o mesmo do que o de duas linhas acima.
  //console.log(event.currentTarget.)
});
*/
//aula generic types:
/*
function adicionaApendiceALista<T>(array: T[], valor: T){
  return array.map(() => valor)
}

adicionaApendiceALista(['A','B','C'], 'D');
*/

//Aula desenvolvendo condicionais a partir de parâmetros
/*
interface IUsuario{
  id: string;
  email:string;
}

interface IAdmin extends IUsuario{
  cargo: 'GM'| 'Coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario| IAdmin){
  if('cargo' in usuario){
    //redirecionar para a área de ADM
  }
    //redireciona para a área do usuário
}
*/
//Aula de caracter "?" para variavel opcional
/*
interface IUsuario{
  id: string;
  email:string;
  cargo?: 'funcionario' | 'GM' | 'Coordenador' | 'supervisor';
}
function redirecione(usuario: IUsuario){
  if(usuario.cargo){
    //redirecionar (usuario.cargo)
  }
    //redirecionara para área do usuário.
}
*/
/*
interface Cachorro{
   nome:string;
   idade:number;
   parqueFavorito?:string;
}

type CachorroSomenteLeitura = {
  +readonly[K in keyof Cachorro]-?:Cachorro[K]
}

class meuCachorro implements Cachorro {
  nome;
  idade;

  constructor(nome,idade){
    this.idade = nome;
    this.idade = idade;
  }
}

const cao = new meuCachorro('Yasick',7);
*/