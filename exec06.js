const readline = require('readline');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout 
});

rl.question("Digite o primeiro lado do triângulo em 'cm': ", (lado1) =>{
    rl.question("Digite o segundo lado do triângulo em cm: ", (lado2) =>{
        rl.question("Digite o terceiro lado do triângulo em cm: ", (lado3) =>{
            const a = parseFloat(lado1);
            const b = parseFloat(lado2);
            const c = parseFloat(lado3);

            if(a < (b + c) && b < (a + c) && c < (a + b)) {
                if(a == b && b == c) {
                    console.log("É um triângulo equilátero!");
                } else if(a == b || a == c || b == c) {
                    console.log("É um triângulo isósceles!");
                } else {
                    console.log("É um triângulo escaleno!");
                }
            } else {
                console.log("Os valores inseridos não formam um triângulo!");
            }
            rl.close();
        });
    });
});