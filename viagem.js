function gastoCombutivel(km, tipoCombustivel) {
  let metros = km * 1000;
  switch (tipoCombustivel) {
    case "gasolina":
      return Math.ceil(metros / 16000);
    case "etanol":
      return Math.ceil(metros / 11000);
    default:
      console.log("Tipo de Combustivel Invalido");
      break;
  }
}

function qntParadas(arrayPessoas, tempoDeViagem) {
  try {
    for (let i = 0; i < arrayPessoas.length; i++) {
      if (
        typeof arrayPessoas[i] === "null" ||
        typeof arrayPessoas[i] === "undefined"
      ) {
        throw new Error("Pessoa null ou undefined");
      } else if (typeof tempoDeViagem != "number") {
        throw new Error("Tempo de Viagem nao e um numero");
      }
    }
  } catch (error) {
    console.log(error);
  }

  let criancas = 0;
  let adultos = 0;
  let minutos = tempoDeViagem * 60;
  for (let i = 0; i < arrayPessoas.length; i++) {
    if (
      typeof arrayPessoas[i] === "null" ||
      typeof arrayPessoas[i] === "undefined"
    ) {
      return console.log("Error pessoa null ou undefined");
    } else if (arrayPessoas[i] === "adulto") {
      adultos++;
    } else if (arrayPessoas[i] === "criança") {
      criancas++;
    }
  }
  if (criancas > adultos) {
    return Math.round(minutos / 40);
  } else if (criancas > 0) {
    return Math.round(minutos / 60);
  } else {
    return Math.round(minutos / 90);
  }
}

function valorRefeicoes(arrayPessoas, qntParadas) {
  try {
    for (let i = 0; i < arrayPessoas.length; i++) {
      if (
        typeof arrayPessoas[i] === "null" ||
        typeof arrayPessoas[i] === "undefined"
      ) {
        throw new Error("Pessoa null ou undefined");
      } else if (typeof qntParadas != "number") {
        throw new Error("Quantidade de Paradas nao e um inteiro");
      }
    }
  } catch (error) {
    console.log(error);
  }
  let criancas = 0;
  let adultos = 0;
  for (let i = 0; i < arrayPessoas.length; i++) {
    if (arrayPessoas[i] === "adulto") {
      adultos++;
    } else if (arrayPessoas[i] === "criança") {
      criancas++;
    }
  }
  let gastoCompleto = 0;
  let contRefeicaoLeve = 0;
  for (let i = 0; i < qntParadas; i++) {
    if (i === 0 || contRefeicaoLeve % 2 === 0) {
      gastoCompleto += criancas * 40 + adultos * 50;
      contRefeicaoLeve++;
    } else {
      gastoCompleto += criancas * 20 + adultos * 30;
    }
  }
  return gastoCompleto;
}

module.exports = { gastoCombutivel, qntParadas, valorRefeicoes };
