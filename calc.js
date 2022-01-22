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
  //Проверка на правильность ввода чисел.
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
          result = `${num1} / ${num2} = ?\nНа ноль делить нельзя!`;
        }
        break;
      case 'mod':
        if (num2 != 0) {
          result = `${num1} % ${num2} = ${num1 % num2}`;
        } else {
          result = `${num1} % ${num2} = ?\nНа ноль делить нельзя!`;
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
