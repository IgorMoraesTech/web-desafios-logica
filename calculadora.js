const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro número: ', (num1Input) => {
  rl.question('Digite o segundo número: ', (num2Input) => {
    rl.question('Digite a operação (+, -, *, /): ', (operadorInput) => {
      const num1Texto = num1Input.trim();
      const num2Texto = num2Input.trim();
      const operador = operadorInput.trim().toLowerCase();

      const num1 = Number(num1Texto);
      const num2 = Number(num2Texto);
      let resultado;

      if (isNaN(num1) || isNaN(num2)) {
        console.log('Erro: Insira apenas números válidos.');
        rl.close();
        return;
      }

      switch (operador) {
        case '+':
          resultado = num1 + num2;
          console.log(`Resultado: ${num1} + ${num2} = ${resultado}`);
          break;

        case '-':
          resultado = num1 - num2;
          console.log(`Resultado: ${num1} - ${num2} = ${resultado}`);
          break;

        case '*':
          resultado = num1 * num2;
          console.log(`Resultado: ${num1} * ${num2} = ${resultado}`);
          break;

        case '/':
          if (num2 === 0) {
            console.log('Erro: Divisão por zero não é permitida.');
          } else {
            resultado = num1 / num2;
            console.log(`Resultado: ${num1} / ${num2} = ${resultado}`);
          }
          break;

        default:
          console.log(
            `Erro: Operador "${operadorInput.trim()}" não é reconhecido. Use +, -, * ou /.`
          );
          break;
      }

      rl.close();
    });
  });
});