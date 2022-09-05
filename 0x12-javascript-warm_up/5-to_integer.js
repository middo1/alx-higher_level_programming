#!/usr/bin/node
/*
Accepts two arguments from the terminal,
concatenates the arguments in format
arg1 is arg2
and prints the result
*/
const intarg = parseInt(process.argv[2]);
if (isNaN(intarg)) {
  console.log('Not a number');
} else {
  console.log('My number: ' + intarg);
}
