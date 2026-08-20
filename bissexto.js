import readline from 'readline';

// Configuração da interface de entrada e saída no terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um ano para verificar: ', (resposta) => {
  // Conversão explícita de String para Number
  const ano = Number(resposta);

  // Expressão lógica conforme especificado na aula
  const ehBissexto = (ano % 4 === 0) && (ano % 100 !== 0 || ano % 400 === 0);

  if (ehBissexto) {
    console.log(`O ano ${ano} É bissexto!`);
  } else {
    console.log(`O ano ${ano} NÃO é bissexto.`);
  }

  // Encerra a leitura do terminal
  rl.close();
});