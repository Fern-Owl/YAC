const calcKeys = document.querySelectorAll('button');
const display = document.getElementById('display');

let clickedKey;

calcKeys.forEach((key) =>
  key.addEventListener('click', (mouseClick) => {
    clickedKey = mouseClick.target.id;
    display.innerHTML += clickedKey;
  })
);

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

  if (num1 / num2 === Infinity) {
    return 'Zero division error!';
  }
  return result;
}
