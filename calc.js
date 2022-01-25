function Calc(operator, num1, num2) {
  let result;

  const operations = {
    sum: +num1 + +num2,
    sub: num1 - num2,
    mul: num1 * num2,
    div: num1 / num2,
  };

  if (isNaN(+num1) || isNaN(+num2)) {
    result = 'Error';
  } else if (num1 === undefined) {
    result = 'Error';
  } else if (num2 === undefined) {
    result = 'Error';
  } else if (!(operator in operations)) {
    result = 'Unknown operation';
  } else {
    result = operations[operator];
  }

  // if (num1 / num2 === Infinity) {
  //   return 'Zero division error!';
  // }
  return result;
}

console.log(Calc('sum', 2, 2));
console.log(Calc('sub', 10, 3));
console.log(Calc('div', 144, 12));
console.log(Calc('div', 1, 0));
console.log(Calc('mul', 23, 3));
console.log(Calc('mul', 42, 10));
