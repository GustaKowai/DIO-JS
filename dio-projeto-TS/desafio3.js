"use strict";
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let saldoAtual = 0;
limparSaldo();
function somarAoSaldo(soma) {
    if (campoSaldo) {
        saldoAtual += soma;
        campoSaldo.innerHTML = saldoAtual.toString();
        limparCampo(); //só para apagar o numero digitado do input
    }
}
function limparCampo() {
    soma.value = "";
}
function limparSaldo() {
    if (campoSaldo) {
        saldoAtual = 0;
        campoSaldo.innerHTML = saldoAtual.toString();
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });
}
if (botaoLimpar) {
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}
