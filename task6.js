//Create a function that takes an array containing only numbers and return the first element.

//Examples
//getFirstValue([1, 2, 3]) ➞ 1

//getFirstValue([80, 5, 100]) ➞ 80

//getFirstValue([-500, 0, 50]) ➞ -500

function getFirstValue(arr) {
  return arr[1];
}

const result = getFirstValue([1, 2, 3]);
const result2 = getFirstValue([80, 5, 100]);
const result3 = getFirstValue([-500, 0, 50]);
