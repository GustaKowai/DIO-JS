const pessoas = {
  nome: "Felipe",
  idade: 10
}
const pessoas2 = {
  nome:"Alice",
  idade:7
}


function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.apply(pessoas2, [30]));
console.log(calculaIdade.call(pessoas,30));