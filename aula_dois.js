const prompt = require('prompt-sync')();

let n1 = parseFloat(prompt("Digite a primeira nota: "));
let n2 = parseFloat(prompt("Digite a segunda nota: "));
let n3 = parseFloat(prompt("Digite a terceira nota: "));

let media = (n1 + n2 + n3) / 3;

console.log("Média:", media);

media >= 7 ? console.log("Aluno APROVADO") : media >= 5 ? console.log("Aluno em RECUPERAÇÃO") : console.log("Aluno REPROVADO");