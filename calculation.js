'use strict';

// Write a JS function, which will work as a calculator.
// It will accept 3 arguments, first number, second number and the sign
// EX:
// calc(1, 2, ‘+’) =>3
// calc(1, 2, ‘-’) =>-1
// calc(1, 2, ‘*’) =>2
// calc(1, 2, ‘/’) =>½

function calc(operand1, operand2, operator) {
  if (operator === '+') {
    return operand1 + operand2;
  }
  if (operator === '-') {
    return operand1 - operand2;
  }
  if (operator === '*') {
    return operand1 * operand2;
  }
  if (operator === '/') {
    return operand1 / operand2;
  }
}

console.log(calc(1, 2, '-'));
