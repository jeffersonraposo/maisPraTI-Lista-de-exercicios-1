//Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite uma nota de 0 a 10: ',(input) => {
    const nota = parseInt(input);

    if(isNaN(nota) || nota < 0 || nota > 10) {
        console.log('Valor inválido, digite um valor entre 0 e 10!')
    } else if(nota < 5) {
        console.log(`Sua nota é ${nota} e você foi reprovado!`)
    } else if(nota < 7) {
        console.log(`Sua nota é ${nota} e você está de recuperação!`)
    } else if(nota >= 7) {
        console.log(`Sua nota é ${nota} e você foi aprovado!`)
    }

    rl.close();
});