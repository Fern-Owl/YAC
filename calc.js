/*
I rewrited this version of the calculator for the node REPL environment.
In order to use it, You should start node via the command line interface
of your choice and type '.load calc.js'.
The original version that I did for the first Frontend Maraphon is 
located here https://github.com/Fern-Owl/GFM_Calculator 
*/

function calcExplainer() {
  console.log(`
  Welcome to the Calculator!
  How to use it:
  Call the calc() function with three arguments:
  operator, number 1 and number 2.
  Like this -> calc('sum', 2, 2)
  Call calcHelp() to see the list of possible operations.
    `);
  return "Let's start calculating!";
}

function calcHelp() {
  console.log(`
  Possible operations include:
  'sum' = addition
  'sub' = subtraction
  'mul' = multiplication
  'div' = division
  'mod' = modulus division
  'pow' = raise to the power
    `);
  return "Let's start calculating!";
}

function calc(operator, num1, num2) {
  let result;

  if (isNaN(+num1) || isNaN(+num2)) {
    result = 'Error';
  } else if (num1 == null || num1 == '') {
    result = 'Error';
  } else if (num2 == null || num2 == '') {
    result = 'Error';
  } else {
    switch (operator) {
      case 'sum':
        result = `${num1} + ${num2} = ${+num1 + +num2}`;
        break;
      case 'sub':
        result = `${num1} - ${num2} = ${num1 - num2}`;
        break;
      case 'mul':
        result = `${num1} * ${num2} = ${num1 * num2}`;
        break;
      case 'div':
        if (num2 != 0) {
          result = `${num1} / ${num2} = ${num1 / num2}`;
        } else {
          result = `${num1} / ${num2} = ?\nZero Division Error!`;
        }
        break;
      case 'mod':
        if (num2 != 0) {
          result = `${num1} % ${num2} = ${num1 % num2}`;
        } else {
          result = `${num1} % ${num2} = ?\nZero Division Error!`;
        }
        break;
      case 'pow':
        result = `${num1} ^ ${num2} = ${num1 ** num2}`;
        break;
      default:
        result = 'unknown operation';
    }
  }
  console.log(result);
  return 'Done';
}

calcExplainer();
