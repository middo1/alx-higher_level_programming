#!/usr/bin/node
/*
Accepts an int from the console
and prints 'c is fun' * the int
*/

if (process.argv[2] === undefined) {
  console.log('Missing number of occurrences');
} else {
  const occurInt = parseInt(process.argv[2]);
  for (let x = 0; x < occurInt; x++) {
    console.log('C is fun');
  }
}
