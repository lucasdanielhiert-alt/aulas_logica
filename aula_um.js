const prompt = require('prompt-sync')();

let name = prompt("Qual o seu nome? ");
let sobrenome = prompt("Qual o seu sobrenome? ");
console.log(`Olá, ${name} ${sobrenome}`);