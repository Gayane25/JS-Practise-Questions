'use strict';
// Write a JavaScript function that checks if the given string includes the given substring.
// EX: str = “Hello” substr = “ell” => returned value is true
// EX: str = “Kill” substr = “lolo” => returned value is false

function includePattern(pattern, string) {
  if (string.includes(pattern)) {
    return true;
  } else {
    return false;
  }
}

console.log(includePattern('ell', 'Hello'));
