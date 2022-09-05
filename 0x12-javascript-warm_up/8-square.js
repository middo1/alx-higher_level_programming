#!/usr/bin/node
/*
Accepts an int from the console
and prints a square
*/

const occurInt = parseInt(process.argv[2]);
if (isNaN(occurInt)) {
  console.log('Missing size');
} else {
  for (let x = 0; x < occurInt; x++) {
    console.log('X'.repeat(occurInt));
  }
}
