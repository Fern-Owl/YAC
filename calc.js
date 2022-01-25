function Calc(operator, num1, num2) {
  let result;

  const operations = {
    sum: +num1 + +num2,
    sub: num1 - num2,
    mult: num1 * num2,
    div: num1 / num2,
  };

  if (isNaN(+num1) || isNaN(+num2)) {
    result = 'error';
  } else if (num1 === undefined) {
    result = 'error';
  } else if (num2 === undefined) {
    result = 'error';
  } else if (!(operator in operations)) {
    result = 'unknown operation';
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
console.log(Calc('mult', 23, 3));
console.log(Calc('mult', 42, 10));
console.log(Calc('blabla', 0, 0));
console.log(Calc('sum', 42));
console.log(Calc('div', 'Mmm?', 13));
