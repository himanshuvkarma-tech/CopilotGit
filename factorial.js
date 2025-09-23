    const calculateFactorial = (n) => {
      if (!Number.isInteger(n) || n < 0) return undefined;
      if (n === 0) return 1;
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
      return result;
    };

    const calculateFactorialWithoutRecursion = (n) => {
      if (!Number.isInteger(n) || n < 0) return undefined;
      if (n === 0) return 1;
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
      return result;
    };

    const calculateFactorialWithoutRecursionUsingReduce = (n) => {
      if (!Number.isInteger(n) || n < 0) return undefined;
      if (n === 0) return 1;
      return Array.from({ length: n - 1 }, (_, i) => i + 2).reduce((acc, curr) => acc * curr, 1);
    };  
const calculateFactorialWithoutRecursion = (n) => {
  if (n < 0) return undefined;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Exporting both functions for testing purposes
module.exports = {
  calculateFactorial,
  calculateFactorialWithoutRecursion
};