let anyValue:any;

anyValue = 3;
anyValue = 'teste';
anyValue = 5;

let stringTeste:string = 'verificar';
stringTeste = anyValue;

let unknowValue: unknown;

unknowValue = 3;
unknowValue = 'opa';
unknowValue = true;
unknowValue = 'vai sim'

let stringTeste2:string = 'agora vai'

if (typeof unknowValue === 'string'){
  stringTeste2 = unknowValue;
}
  
function jogaErro (erro:string, codigo:number):never{
  throw{error: erro, code:codigo}
}

jogaErro('deu erro', 500)