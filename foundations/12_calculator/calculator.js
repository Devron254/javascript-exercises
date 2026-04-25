function add(a, b) {
  return a + b; 
}

function subtract(a, b) {
  return a - b;
}

  
function sum(arr) {
  let total = 0;
  
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}
 
function multiply(arr) {
  let total = 1;

  for (let i = 0; i < arr.length; i++) {
    total *= arr[i];
  }

  return total;
}

function power(base, exponent) {
  let total = 1;

  for (let i = 0; i < exponent; i++) {
    total *= base;
  }

  return total;
}

function factorial(n) {
  if (n === 0) return 1;

  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}





// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
