
const readline = require('readline');

// Cria uma interface para leitura da entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicita um número ao usuário
rl.question('Digite um número: ', (numero) => {
    numero = parseInt(numero); // Converte a entrada para um número inteiro

    // Verifica e exibe os números pares até o número fornecido
    for (let i = 2; i <= numero; i += 2) {
        console.log(i);
    }

    rl.close(); // Fecha a interface de leitura
});