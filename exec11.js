const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(ask) {
    return new Promise((resolve) => {
        rl.question(ask, (response) => resolve(response));
    });
}

async function main() {
    console.log("A seguir, você precisa digitar 5 números.");

    const numbers = [];
    for (let i = 1; i <= 5; i++) {
        const response = await question(`Digite o ${i}º número: `);
        numbers.push(Number(response));
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    console.log(`Números digitados: ${numbers}`);
    console.log(`Soma total: ${sum}`);

    rl.close();
}

main();