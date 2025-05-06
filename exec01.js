//Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

//importa módulo do nodejs
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número inteiro: ', (input) => {
  const numero = parseInt(input);

  if (isNaN(numero)) {
    console.log("Valor inválido. Por favor, digite um número inteiro.");
  } else if (numero % 2 === 0) {
    console.log(`O número ${numero} é par.`);
  } else {
    console.log(`O número ${numero} é ímpar.`);
  }

  rl.close();
});
