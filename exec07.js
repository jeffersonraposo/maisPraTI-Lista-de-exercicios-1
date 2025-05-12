const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a quantidade de maças que deseja comprar: ", (input) => {
    const quantidade = Number(input);
    
    if (isNaN(quantidade) || quantidade <= 0) {
        console.log("Digite um número válido!");
        rl.close();
        return;
    }
    
    let total;
    if(quantidade < 12){
        total = quantidade * 0.30
        console.log(`O valor total da compra de ${quantidade} maçãs é de R$${total.toFixed(2)}`);
    } else {
        total = quantidade * 0.25
        console.log(`O valor total da compra de ${quantidade} maçãs é de R$${total.toFixed(2)}`);
    }
    rl.close();
});