const calcKeys = document.querySelectorAll('button');
const display = document.getElementById('display');
const digits = '0123456789';
const operationSymbols = '÷×+-';

let clickedKey;
let number1 = '0';
let number2 = '';
let operator = '';
let calculated = 0;
let lastResultIsOnScreen = false;

calcKeys.forEach((key) =>
  key.addEventListener('click', (mouseClick) => {
    clickedKey = mouseClick.currentTarget.id;
    if (!operator && digits.includes(clickedKey)) {
      if (lastResultIsOnScreen) {
        number1 = '';
        lastResultIsOnScreen = false;
      }
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
        clear();
        outputter();
        display.innerText = `error`;
      } else {
        number1 = `${calculated}`;
        number2 = '';
        operator = clickedKey;
        outputter();
      }
    } else if (clickedKey === 'clear') {
      clear();
      outputter();
    } else if (clickedKey === 'erase') {
      lastResultIsOnScreen = false;
      if (
        (number2.length === 2 && number2[0] === '-') ||
        number2.length === 1
      ) {
        number2 = '';
        outputter();
      } else if (number2) {
        number2 = number2.slice(0, number2.length - 1);
        outputter();
      } else if (operator) {
        operator = '';
        outputter();
      } else if (
        (number1.length === 2 && number1[0] === '-') ||
        number1.length === 1
      ) {
        clear();
        outputter();
      } else if (number1) {
        number1 = number1.slice(0, number2.length - 1);
        outputter();
      }
    } else if (number2 && clickedKey === '=') {
      calculated = Calc(operator, +number1, +number2);
      if (!isFinite(calculated)) {
        clear();
        outputter();
        display.innerText = `error`;
      } else {
        clear();
        number1 = `${calculated}`;
        lastResultIsOnScreen = true;
        outputter();
      }
    } else if (number1 && !number2 && clickedKey === '=') {
      operator = '';
      outputter();
    }
  })
);

function clear() {
  number1 = '0';
  number2 = '';
  operator = '';
}

function outputter() {
  let num1Formatted;
  let num2Formatted;

  num1Formatted = Number(number1).toLocaleString('en-US');
  num2Formatted = !number2 ? '' : Number(number2).toLocaleString('en-US');

  let finalString = `${num1Formatted}${operator}${num2Formatted}`;

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
    '×': num1 * num2,
    '÷': num1 / num2,
  };

  return operations[oper];
}
