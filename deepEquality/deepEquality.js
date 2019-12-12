/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange) {
  if (typeof apple === typeof orange) { // exit from the very beginning if they dont have the same type

    // Checking on arrays
    if (Array.isArray(apple)) {
      if (apple.length !== orange.length){ // False if different lengths
        return false;
      }
      for (var i = 0; i < apple.length;  i++) { // for each element of the array, do the same function for the value contained
        if (!deepEquals(apple[i], orange[i])){ // If not equal, return false
          return false;
        }
      }
      return true; // If they reach here, the values in the array are equal


    // Checking on objects  
    } else if (typeof apple === "object"){
      if (Object.keys(apple).length !== Object.keys(orange).length){ // False if different lengths
        return false;
      }
      for (var key in apple) { // for each element of the object, do the same function for the value contained
        if (!deepEquals(apple[key],orange[key])){ // If not equal, return false
          return false;
        }
      }
      return true; // If they reach here, the values in the objects are equal
    } else {
      if (apple === orange) { // Checks other values (Numbers, strings and booleans for truth test used for objects and arrays)
        return true;
      }
      return false;
    }
  } else {
    return false;
  }
};
