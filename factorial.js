const calculateFactorial = (n) => {
  if (n < 0) return undefined;
  if (n === 0) return 1;
  return n * calculateFactorial(n - 1);
};

const calculateFactorialWithoutRecursion = (n) => {
  if (n < 0) return undefined;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};
