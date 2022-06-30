"use strict";
let anyValue;
anyValue = 3;
anyValue = 'teste';
anyValue = 5;
let stringTeste = 'verificar';
stringTeste = anyValue;
let unknowValue;
unknowValue = 3;
unknowValue = 'opa';
unknowValue = true;
unknowValue = 'vai sim';
let stringTeste2 = 'agora vai';
if (typeof unknowValue === 'string') {
    stringTeste2 = unknowValue;
}
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro', 500);
