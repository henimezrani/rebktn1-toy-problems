// Arrayception

// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
// 

// Examples
//  Input 	Output
//  array:
//  [ [ 5 ], [ [ ] ] ] ==>	2
//  array:
//  [ 10, 20, 30, 40 ] ==>	1
//  array:
//  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] ==>	4
//  array:
//  [ ] ==>	0
//  array:
//  [ [ [ ] ] ] ==>	0

function arrayception(array) {
  var stringifiedArray = JSON.stringify(array);
  var max = 0;
  var count = 0;
  var boo = false;
  for (var i = 0; i < stringifiedArray.length; i++) {
    debugger;
    if (stringifiedArray[i] === "[") {
      count++;
    } else if (stringifiedArray[i] === "]" && boo) {
      if (count > max) {
        max = count
      }
      boo = false;
      count--
    } else if (stringifiedArray[i] === "]") {
      count--;
    } else if (stringifiedArray[i] !== ","){
      boo = true;
    }
  }
return max
}

