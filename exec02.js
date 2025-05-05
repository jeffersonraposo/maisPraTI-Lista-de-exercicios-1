//importa módulo do nodejs
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite sua idade: ', (input) => {
  const idade = parseInt(input);

  if (isNaN(idade)) {
    console.log("Valor inválido. Por favor, digite um número inteiro.");
  } else if (idade <= 12) {
    console.log(`Você tem ${idade} anos e é uma criança!`);
  } else if (idade < 18) {
    console.log(`Você tem ${idade} anos e é um adolescente!`);
  } else if (idade >= 18 && idade <60) {
    console.log(`Você tem ${idade} anos e é um adulto!`)
  } else {
    console.log(`Você tem ${idade} anos e é um idoso!`)
  }

  rl.close();
});
