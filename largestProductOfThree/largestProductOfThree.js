/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40
*/

function largestProductOfThree(array) {
  array.sort(function(a, b) {
    return a - b;
  });
  var negativeCount = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0) { 
      negativeCount++; 
    } else { 
      break;
    }
  }
  var product1 = array[array.length-1] * array[array.length-2] * array[array.length-3]
  if (negativeCount > 1) {
    var product2 = array[0] * array[1] * array[array.length-1];
    if (product2 > product1) {
      return product2;
    }
  }
  return product1;
}

