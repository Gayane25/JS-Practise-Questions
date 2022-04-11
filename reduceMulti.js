// Functions
// Return the sum of all arguments passed to function.
//             Example: f(1,2,3,4) => 24, f(4,7) => 28, f(4) => 4

function reduceMulti(...args) {
  return args.reduce((acc, curr) => {
    return (acc *= curr);
  }, 1);
}
console.log(reduceMulti(1, 2, 3, 4));
