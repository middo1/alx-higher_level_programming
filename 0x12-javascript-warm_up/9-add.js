#!/usr/bin/node
/*
Accepts two int as argument
and prints the sum
*/
function add (a, b) {
  return a + b;
}
const arg1 = parseInt(process.argv[2]);
const arg2 = parseInt(process.argv[3]);
console.log(add(arg1, arg2));
