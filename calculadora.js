const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro número: ', (num1Input) => {
  rl.question('Digite o segundo número: ', (num2Input) => {
    rl.question('Digite a operação (+, -, *, /): ', (operador) => {
      const num1 = Number(num1Input);
      const num2 = Number(num2Input);
      let resultado;

      if (isNaN(num1) || isNaN(num2)) {
        console.log('Erro: Insira apenas números válidos.');
        rl.close();
        return;
      }

      switch (operador.trim()) {
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
          console.log(`Erro: Operador "${operador}" não é reconhecido. Use +, -, * ou /.`);
          break;
      }

      rl.close();
    });
  });
});