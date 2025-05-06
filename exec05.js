//Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite seu peso (kg): ", (peso) =>{
    rl.question("Digite sua altura em metros (Exemplo 1.75): ", (altura) =>{
        const imc = peso / (altura * altura);
        if(imc < 18.5) {
            console.log(`Seu IMC é ${imc.toFixed(2)} e você está abaixo do peso!`);
        } else if(imc >= 18.5 && imc < 25) {
            console.log(`Seu IMC é ${imc.toFixed(2)} e você está dentro do peso normal!`);
        } else if(imc >= 25 && imc < 30) {
            console.log(`Seu IMC é ${imc.toFixed(2)} e você está com sobrepeso!`)    
        } else if(imc >= 30) {
            console.log(`Seu IMC é ${imc.toFixed(2)} e você está com obesidade!`)    
        } else {
            console.log(`Digite um valor válido!`);
        }
        rl.close();
    });
});