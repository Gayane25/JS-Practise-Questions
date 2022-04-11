'use strict';

// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

// let result = arr.reduce(function (prev, current) {
//   prev[current] = (prev[current] || 0) + 1;
//   return prev;
// }, {});
function longestWord(string) {
  string = string.split(' ');
  let longest = '';
  string.forEach(item => {
    if (item.length > longest.length) {
      longest = item;
    }
  });
  return longest;
}

console.log(longestWord('Web Development Tutorial'));
