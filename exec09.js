const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Contando em 3, 2, 1.... Pressione Enter para comerçar ", () => {
    for (let i=10; i >= 1; i-- ) {
        console.log(i);
    }
    console.log("Contagem finalizada!");
    rl.close();
});