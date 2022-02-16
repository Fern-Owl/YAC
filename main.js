const calcKeys = document.querySelectorAll('button');
const display = document.getElementById('display');
const digits = '0123456789';
const operationSymbols = '/*+-';

let clickedKey;
let number1 = '';
let number2 = '';
let operator = '';
let calculated = 0;

calcKeys.forEach((key) =>
  key.addEventListener('click', (mouseClick) => {
    clickedKey = mouseClick.target.id;
    if (!operator && digits.includes(clickedKey)) {
      number1 += clickedKey;
      outputter();
    } else if (operator && digits.includes(clickedKey)) {
      number2 += clickedKey;
      outputter();
    } else if (!operator && number1 && operationSymbols.includes(clickedKey)) {
      operator = clickedKey;
      outputter();
    } else if (operator && !number2 && operationSymbols.includes(clickedKey)) {
      operator = clickedKey;
      outputter();
    } else if (operator && number2 && operationSymbols.includes(clickedKey)) {
      calculated = Calc(operator, +number1, +number2);
      if (!isFinite(calculated)) {
        display.innerText = `error`;
        clear();
      } else {
        number1 = `${calculated}`;
        number2 = '';
        operator = clickedKey;
        outputter();
      }
    } else if (clickedKey === 'clear') {
      clear();
      display.innerText = '0';
    } else if (clickedKey === 'erase') {
      if (number2.length === 1) {
        number2 = '';
        outputter();
      } else if (number2) {
        number2 = number2.slice(0, number2.length - 1);
        outputter();
      } else if (operator) {
        operator = '';
        outputter();
      } else if (number1.length === 1) {
        clear();
        display.innerText = '0';
      } else if (number1) {
        number1 = number1.slice(0, number2.length - 1);
        outputter();
      }
    } else if (number2 && clickedKey === '=') {
      calculated = Calc(operator, +number1, +number2);
      if (!isFinite(calculated)) {
        display.innerText = `error`;
        clear();
      } else {
        clear();
        number1 = `${calculated}`;
        outputter();
      }
    } else if (!number2 && clickedKey === '=') {
      operator = '';
      outputter();
    }
  })
);

function clear() {
  number1 = '';
  number2 = '';
  operator = '';
}

function outputter() {
  while (
    number1.length > 1 &&
    number1.charAt(0) === '0' &&
    number1.charAt(1) !== '.'
  ) {
    number1 = number1.substring(1);
  }
  while (
    number2.length > 1 &&
    number2.charAt(0) === '0' &&
    number2.charAt(1) !== '.'
  ) {
    number2 = number2.substring(1);
  }

  let finalString = `${number1}${operator}${number2}`;

  if (finalString.length > 14) {
    display.style.fontSize = '20px';
  } else if (finalString.length > 5) {
    display.style.fontSize = '40px';
  } else {
    display.style.fontSize = '96px';
  }

  display.innerText = finalString;
}

function Calc(oper, num1, num2) {
  const operations = {
    '+': +num1 + +num2,
    '-': num1 - num2,
    '*': num1 * num2,
    '/': num1 / num2,
  };

  return operations[oper];
}
