const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número inteiro para calcular o fatorial: ", (input) => {
    let numero = parseInt(input);

    if (isNaN(numero) || numero < 0) {
        console.log("Por favor, digite um número inteiro positivo.");
    } else {
        let fatorial = 1;
        let i = numero;

        while (i > 1) {
            fatorial *= i;
            i--;
        }

        console.log(`O fatorial de ${numero} é: ${fatorial}`);
    }

    rl.close();
});