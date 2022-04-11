'use strict';

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function findNext(obj, arr = []) {
  if (obj.next === null) {
    arr.push(obj.value);
    return arr;
  }
  if (obj.next !== undefined) {
    arr.push(obj.value);
    return findNext(obj.next, arr);
  }
}

console.log(findNext(list));
