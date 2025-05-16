const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];

function questionNumber(){
    rl.question("Digite um número decimal (0 para encerrar): ", (input) => {
        let number = parseFloat(input);

        if (isNaN(number)) {
            console.log("Entrada inválida. Por favor, digite um número decimal.");
            questionNumber();
            return;
        }

        if(number === 0) {
            if (numbers.length === 0) {
                console.log("Nenhum número foi inserido");
            } else {
                const sum = numbers.reduce((acc, val) => acc + val, 0);
                const average = sum / numbers.length;
                console.log(`A média dos números: ${average.toFixed(2)}`);
            }
            rl.close();
        } else {
            numbers.push(number);
            questionNumber();
        }
    });
}

questionNumber();