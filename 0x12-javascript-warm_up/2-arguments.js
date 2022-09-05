#!/usr/bin/node
/*
Accepts arguments from the terminal
*/

if (process.argv.length === 1) {
  console.log('No argument');
} else if (process.argv.length >= 2 && process.argv.length <= 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
