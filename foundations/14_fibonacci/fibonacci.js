function fibonacci(n) {
  // Step 1: convert string to number
  n = Number(n);

  // Step 2: handle negative numbers
  if (n < 0) return "OOPS";

  // Step 3: base cases
  if (n === 0) return 0;
  if (n === 1) return 1;

  // Step 4: start values
  let prev = 0;
  let curr = 1;

  // Step 5: loop
  for (let i = 2; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}

module.exports = fibonacci;

// Do not edit below this line
module.exports = fibonacci;
