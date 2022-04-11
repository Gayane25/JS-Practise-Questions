'use strict';

//Write a function which will remove all repeated items of array.

function removeDuplicated(arr) {
  let newArr = [];
  arr.forEach(item => {
    if (!newArr.includes(item)) {
      newArr.push(item);
      return newArr;
    }
  });
  return newArr;
}
console.log(removeDuplicated([4, 4, 3, 2, 2, 6, 5, 5, 10, 15]));
