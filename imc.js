const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite seu peso em kg (ex: 75.5): ', (pesoInput) => {
  rl.question('Digite sua altura em metros (ex: 1.75): ', (alturaInput) => {
    const peso = Number(pesoInput);
    const altura = Number(alturaInput);

    // Validação de entrada
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
      console.log('Erro: Por favor, insira valores numéricos válidos.');
      rl.close();
      return;
    }

    const imc = peso / (altura ** 2);
    console.log(`\nIMC Calculado: ${imc.toFixed(2)}`);

    // Classificação com if/else
    if (imc < 18.5) {
      console.log('Classificação: Abaixo do peso');
    } else if (imc >= 18.5 && imc <= 24.9) {
      console.log('Classificação: Peso normal (Adequado)');
    } else if (imc >= 25.0 && imc <= 29.9) {
      console.log('Classificação: Sobrepeso');
    } else {
      console.log('Classificação: Acima do peso (Obesidade)');
    }

    rl.close();
  });
});