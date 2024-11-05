//Write a function that converts hours into seconds.

//Examples
//howManySeconds(2) ➞ 7200

//howManySeconds(10) ➞ 36000

//howManySeconds(24) ➞ 86400

function howManySeconds(hours) {
  return hours * 60 * 60;
}

const result = howManySeconds(2);
const result2 = howManySeconds(10);
const result3 = howManySeconds(24);
