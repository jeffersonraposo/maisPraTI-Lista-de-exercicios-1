const readline = require('readline');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout 
});

rl.question("Digite um número inteiro: ", (input1) =>{
    rl.question("Digite mais um número inteiro: ", (input2) =>{
        const num1 = Number(input1);
        const num2 = Number(input2);
        const numeros = [num1, num2];
        numeros.sort((a, b) => a - b);

        console.log(`Números em ordem crescente: ${numeros}`);
        
        rl.close();
    });
});