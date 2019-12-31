/*
Zero Sum
Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

Constraints: Solve this linear time complexity O(n)

zeroSum([ 1, 3, 2, -3 ]) // true
zeroSum([ 5, 7, 2, 9 ]) // false
*/


function zeroSum(array) {
  var expectedNums = {};
  for (var i = 0 ; i < array.length ; i++) {
    var expected = -array[i]
    if (expectedNums[array[i]]) {
      return true;
    }
    expectedNums[expected] = true
  }
  return false
}