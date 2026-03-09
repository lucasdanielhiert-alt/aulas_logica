const prompt = require('prompt-sync')();

let cor = prompt("Qual a cor do seu carro? ");
let modelo = prompt("Qual o modelo do seu carro? ");
let ano = prompt("Qual o ano do seu carro? ");
let km = prompt("Qual a quilometragem do seu carro? ");

console.log(`
___ FICHA DO VEICULO ___
--- Modelo: ${modelo} ---
Cor:        ${cor}
Ano:        ${ano}
KM:         ${km} km
------------------------
`);