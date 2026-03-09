const prompt = require('prompt-sync')();

const jogo = {
    p1: { nome: prompt("Jogador 1: "), pontos: 0 },
    p2: { nome: prompt("Jogador 2: "), pontos: 0 }
};

let op;
while (op !== "3") {
    console.log(`\n${jogo.p1.nome}: ${jogo.p1.pontos} | ${jogo.p2.nome}: ${jogo.p2.pontos}`);
    op = prompt("1. + P1 | 2. + P2 | 3. Sair: ");

    if (op === "1") jogo.p1.pontos++;
    if (op === "2") jogo.p2.pontos++;
}

console.log("Fim de jogo!");