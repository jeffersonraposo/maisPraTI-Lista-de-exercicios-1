const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite um número inteiro: ", (input) => {
    const num = Number(input);

    if (isNaN(num) || !Number.isInteger(num)) {
        console.log("Digite um número inteiro válido!");
        rl.close();
        return;
    }

    for (i = 0; i < 10; i++ ) {
        console.log(`${num}`);
    }
    rl.close();

});