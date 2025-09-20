/**
 * Prints the numbers from 1 to n with the following substitutions:
 * - For multiples of 3, prints "Fizz" instead of the number.
 * - For multiples of 5, prints "Buzz" instead of the number.
 * - For multiples of both 3 and 5, prints "FizzBuzz" instead of the number.
 *
 * @param {number} n - The upper limit of the range (inclusive).
 * @returns {void}
 */
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}




function sumOfTwoNumbers(a, b) {    
  return a + b;
}

module.exports = fizzBuzz;
module.exports.sumOfTwoNumbers = sumOfTwoNumbers;