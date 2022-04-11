'use strict';

function repeatedChars(arr) {
  let result = arr.reduce(function (prev, current) {
    prev[current] = (prev[current] || 0) + 1;
    return prev;
  }, {});
  let max = Math.max(...Object.values(result));
  for (let key in result) {
    if (result[key] === max) {
      return max;
    }
  }
  return max;
}

console.log(repeatedChars([5, 5, 5, 5, 4, 4, 4, 4, 4, 4]));
