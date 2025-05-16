const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log("Sequência de Fibonacci (10 primeiros números):");

let n1 = 0;
let n2 = 1;

for (let i = 0; i < 10; i++) {
    console.log(n1);
    let proximo = n1 + n2;
    n1 = n2;
    n2 = proximo;
}



rl.close();