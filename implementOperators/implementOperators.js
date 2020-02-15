/*
Implement Operators

Write three functions to replace the multiply, divide, and modulo operators. 
The only operators you may only use in your solution are addition and subtraction. 
Your functions will only have to handle integer math.

EXAMPLES:
  multiply(5, 2) // 10
  divide(5, 2) // 2
  modulo(5, 2) // 1
*/

var multiply = function(x, y) {
  if (x < y) {
    return multiply(y, x);
  }
  var result = 0;
  for (var i = Math.abs(y); i > 0; i--) {
    result += x;
  }
  if (y < 0) {
    result = -result;
  }

  return result;
};

var divide = function(x, y) {
  if (y === 0) {
    return "error";
  }

  var quotient = 0;
  var divisor = -Math.abs(y);

  for (i = Math.abs(x); i >= Math.abs(divisor); i += divisor) {
    console.log(i, divisor);
    console.log(quotient);
    quotient++;
  }

  if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
    quotient = -quotient;
  }

  return quotient;
};

var modulo = function(x, y) {
  var result = x;
  while (result >= y) result -= y;

  return result;
};
