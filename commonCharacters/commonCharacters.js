/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexiveou', 'aegihoebu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
	var result = "";
	var obj = {};
  for ( var i = 0 ; i < string2.length ; i++) {
  	if (obj[string2[i]] === undefined) {
  		obj[string2[i]] = true;
  	}
  }

  for ( var i = 0 ; i < string1.length; i++) {
  	if (obj[string1[i]] === true) {
  		result += string1[i];
  		obj[string1[i]] = false;
  	}
  }

  return result;
};
