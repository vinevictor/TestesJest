const viagem = require("./viagem.js");

var arrPessoas = ["adulto", "criança", "adulto", "criança", "criança"];

test("Função Gasto de Combustivel", () => {
  expect(viagem.gastoCombutivel(320, "gasolina")).toBe(20);
  expect(viagem.gastoCombutivel(320, "etanol")).toBe(30);
});

test("Função Quantidade de Paradas", () => {
  expect(viagem.qntParadas(arrPessoas, 5)).toBe(8);
});

test("Função Valor Refeições", () => {
  expect(viagem.valorRefeicoes(arrPessoas, 8)).toBe(1060);
});
