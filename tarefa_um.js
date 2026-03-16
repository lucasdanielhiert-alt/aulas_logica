const prompt = require('prompt-sync')();

let alunos = []; // Array que guardará os objetos de cada aluno
let indice = 0;  // Contador para saber em qual posição do array salvar o próximo aluno

while (true) {
  console.log("Escolha uma opção:");
  console.log("1. Cadastrar Aluno");
  console.log("2. Procurar Aluno");
  console.log("3. Sair");

  let opcao = prompt("Digite sua opção: ");

  if (opcao === "1") {
    let nome = prompt("Digite o nome do aluno: ");
    let sobrenome = prompt("Digite o sobrenome do aluno: ");
    let nota1 = prompt("Digite a 1ª nota: ");
    let nota2 = prompt("Digite a 2ª nota: ");
    let nota3 = prompt("Digite a 3ª nota: ");

    // PARTE DIFÍCIL Criando um Objeto Literal
    // Aqui estamos salvando vários dados diferentes em uma única "caixa" (objeto)
    // e colocando essa caixa dentro da gaveta (índice) do nosso armário (array alunos).
    alunos[indice] = { 
      nome: nome, 
      sobrenome: sobrenome, 
      notas: [nota1, nota2, nota3] // Notas são salvas como uma lista (array) interna
    };
    
    indice++; // Aumenta o contador para o próximo cadastro não sobrescrever este
    console.log("Aluno cadastrado!\n");

  } else if (opcao === "2") {
    let nomeAluno = prompt("Digite o nome do aluno: ");
    let sobrenomeAluno = prompt("Digite o sobrenome do aluno: ");
    let encontrado = false; // Flag (bandeira) para saber se achamos o aluno após o loop terminar
    
    // PARTE DIFÍCIL Percorrendo o Array ---
    // O 'for' vai olhar aluno por aluno até o limite de quantos cadastramos (indice)
    for (let i = 0; i < indice; i++) {
      // Comparamos o nome E o sobrenome digitados com o que está guardado no objeto
      if (alunos[i].nome === nomeAluno && alunos[i].sobrenome === sobrenomeAluno) {
        encontrado = true;
        let notas = alunos[i].notas;

        // PARTE DIFÍCIL  Conversão de Tipos (Casting)
        // O prompt sempre recebe TEXTO (string). Para somar matematicamente, 
        // usamos o parseInt() para transformar o texto em NÚMERO inteiro.
        let totalNotas = parseInt(notas[0]) + parseInt(notas[1]) + parseInt(notas[2]);
        
        let media = totalNotas / 3;

        // PARTE DIFÍCIL Operador Ternário 
        // É um if/else simplificado em uma linha 
        // Se media >= 7 for verdade status recebe Aprovado senão recebe Em Recuperação.
        let status = media >= 7 ? "Aprovado" : "Em Recuperação";

        console.log(`\nAluno: ${alunos[i].nome} ${alunos[i].sobrenome}`);
        console.log(`Notas: ${notas[0]}, ${notas[1]}, ${notas[2]}`);
        console.log(`Total das Notas: ${totalNotas}`);
        console.log(`Média: ${media.toFixed(2)}`); // .toFixed(2) limita as casas decimais
        console.log(`Status: ${status}\n`);
        
        break; // Sai do 'for' imediatamente pois já achamos o aluno
      }
    }

    if (!encontrado) {
      console.log("Aluno não encontrado.\n");
    }

  } else if (opcao === "3") {
    console.log("Saindo...");
    break;  
  } else {
    console.log("Opção inválida. Tente novamente.\n");
  }
}
