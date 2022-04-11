'use strict';

// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in the upper case.
// EX: ‘i love you’ => ‘I Love You’, (use str.split function)

function toUpperCase(string) {
  let myString = string
    .split(' ')
    .map(item => item.charAt(0).toUpperCase() + item.slice(1))
    .join(' ');
  return myString;
}

console.log(toUpperCase('i love you'));
