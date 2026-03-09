const prompt = require('prompt-sync')();

const pessoa = {
    nome: prompt("Qual o seu nome? "),
    idade: prompt("Qual a sua idade? "),
    profissao: prompt("Qual a sua profissão? "),
    cidade: prompt("Em qual cidade você mora? ")
};

console.log(`
==============================
   CADASTRO DE PESSOA
==============================
Nome:      ${pessoa.nome}
Idade:     ${pessoa.idade} anos
Profissão: ${pessoa.profissao}
Cidade:    ${pessoa.cidade}
==============================
`);