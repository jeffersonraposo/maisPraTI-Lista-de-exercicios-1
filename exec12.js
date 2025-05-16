const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número entre 1 e 10: ",(input) => {
    const num = Number(input);

    if (isNaN(num) || !Number.isInteger(num) || num < 1 || num > 10) {
        console.log("Digite um número inteiro válido!");
        rl.close();
        return;
    }

    console.log(`A tabuada do ${num} é: `)
    for (i=1; i <= 10; i++) {
        tab = i * num;
        console.log(`${i} x ${num} = ${tab}`)
    }
    rl.close();
});