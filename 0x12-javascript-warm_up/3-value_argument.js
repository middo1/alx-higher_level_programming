#!/usr/bin/node
/*
Accepts an argument from the terminal and
prints it
*/
const arg = process.argv[2];
if (arg === undefined) {
  console.log('No argument');
} else {
  console.log(arg);
}
