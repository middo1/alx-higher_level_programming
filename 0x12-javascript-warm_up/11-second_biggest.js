#!/usr/bin/node
/*
Accepts a collection of int as arguments
and prints the second largest
*/
function max (arr) {
  let max1 = 0;
  for (let x = 0; x < arr.length; x++) {
    if (arr[x] > max1) {
      max1 = arr[x];
    }
  }
  return max1;
}
const intArr = process.argv.slice(2).map(i => parseInt(i));
if (intArr.length < 2) {
  console.log(0);
} else {
  console.log(max(intArr.filter(i => i < max(intArr))));
}
