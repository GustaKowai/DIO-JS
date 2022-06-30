"use strict";
function printaValoresNumericos(numero1, numero2) {
    console.log(numero1 + numero2);
}
function somaValoresNumericosEtratar(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    if (callback) {
        return callback(resultado);
    }
    return resultado;
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somaValoresNumericosEtratar(1, 3, aoQuadrado));
console.log(somaValoresNumericosEtratar(1, 3, dividirPorEleMesmo));
console.log(somaValoresNumericosEtratar(1, 3));
