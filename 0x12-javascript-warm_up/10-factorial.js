#!/usr/bin/node
/*
Accepts an int as argument
and prints the factorial
*/
function factorial (x) {
  if (x === 1 || isNaN(x)) {
    return 1;
  }
  return x * factorial(x - 1);
}
const myInt = parseInt(process.argv[2]);
console.log(factorial(myInt));
