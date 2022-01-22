function calcActivator() {
  // Ввод чисел и выбор операции.
  let num1 = prompt('Введите первое число:');
  let operator = prompt('Укажите тип операции (+, -, *, /, %, ^):');
  let num2 = prompt('Введите второе число:');
  // Вызов Калькулятора.
  alert(calc(operator, num1, num2));
}

function calc(operator, num1, num2) {
  let result;
  //Проверка на правильность ввода чисел.
  if (isNaN(+num1) || isNaN(+num2)) {
    result = 'Error';
  } else if (num1 == null || num1.trim() == '') {
    result = 'Error';
  } else if (num2 == null || num2.trim() == '') {
    result = 'Error';
  } else {
    switch (operator) {
      case '+':
        result = `${num1} + ${num2} = ${+num1 + +num2}`;
        break;
      case '-':
        result = `${num1} - ${num2} = ${num1 - num2}`;
        break;
      case '*':
        result = `${num1} * ${num2} = ${num1 * num2}`;
        break;
      case '/':
        if (num2 != 0) {
          result = `${num1} / ${num2} = ${num1 / num2}`;
        } else {
          result = `${num1} / ${num2} = ?\nНа ноль делить нельзя!`;
        }
        break;
      case '%':
        if (num2 != 0) {
          result = `${num1} % ${num2} = ${num1 % num2}`;
        } else {
          result = `${num1} % ${num2} = ?\nНа ноль делить нельзя!`;
        }
        break;
      case '^':
        result = `${num1} ^ ${num2} = ${num1 ** num2}`;
        break;
      default:
        result = 'unknown operation';
    }
  }
  return result;
}

calcActivator();
