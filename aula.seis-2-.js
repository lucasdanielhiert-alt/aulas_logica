const readline = require('readline').createInterface({
  input: process.stdin, output: process.stdout
});

const question = (str) => new Promise(res => readline.question(str, res));

async function calc() {
  const n1 = parseFloat(await question("N1: "));
  const op = await question("Op (+ - * /): ");
  const n2 = parseFloat(await question("N2: "));

  const res = {
    '+': n1 + n2, '-': n1 - n2, '*': n1 * n2, '/': n1 / n2
  }[op] ?? "Erro";

  console.log(`Resultado: ${res}`);
  calc(); 
}

calc();