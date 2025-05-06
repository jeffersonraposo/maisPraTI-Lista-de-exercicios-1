//Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("1 - Dizer Olá");
console.log("2 - Mostrar data atual");
console.log("3 - Sair")


rl.question("Escolha uma opção entre 1 e 3: ", (resposta) => {
    switch (resposta.trim()) {
        case '1':
            console.log("Olá, tudo bem com você?");
            break;
        case '2':
            console.log("Data atual:", new Date().toLocaleString());
            break;
        case '3':
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida.");
    }
    rl.close();
});