function calculaSaldo(saldo, itens) {
	if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';//Checagem apra ver se falta algum dos parâmetros

	const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo); //Acc é o acumulador, o item.preco é o valor que sera subtraido e o saldo é o valor inicial do acumulador.

	if (saldoFinal < 0 ) return 'O saldo é incuficiente para realizar essa compra.'// Adiciona uma checage para ver se o saldo é suficiente.
	return `O saldo final será de ${saldoFinal} reais`;
}

lista = [
	{
		preco: 55,
		nome: 'Soul Eater',
	},
	{
		preco: 22.9,
		nome: 'Terra das gemas',
	},
	{
		preco: 35.9,
		nome: 'Komi-san',
	},
];

saldo = 200.0;

console.log(calculaSaldo(saldo, lista));