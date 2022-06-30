"use strict";
let valorAny;
valorAny = 3;
valorAny = 'Ola';
valorAny = false;
let valorString = 'teste';
valorString = valorAny;
let valorString2 = 'testando';
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2);
