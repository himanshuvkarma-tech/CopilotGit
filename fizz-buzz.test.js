const fizzBuzz = require('./fizz-buzz');

function captureFizzBuzzOutput(n) {
  const output = [];
  const originalLog = console.log;
  console.log = (msg) => output.push(msg);
  fizzBuzz(n);
  console.log = originalLog;
  return output;
}

test('fizzBuzz with n=5', () => {
  expect(captureFizzBuzzOutput(5)).toEqual([
    '1', '2', 'Fizz', '4', 'Buzz'
  ]);
});

test('fizzBuzz with n=15', () => {
  expect(captureFizzBuzzOutput(15)).toEqual([
    '1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz'
  ]);
});

test('fizzBuzz with n=0', () => {
  expect(captureFizzBuzzOutput(0)).toEqual([]);
});
