/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
	var result;
	var obj = {};

  for (var i = 0 ; i < string.length ; i++) {
  	if (obj[string[i]] === undefined){
  		obj[string[i]] = true;
  	} else if (obj[string[i]]) {
  		obj[string[i]] = false;
  	}
  }
  for (var i = 0 ; i < string.length ; i++) {
  	if (obj[string[i]]) {
  		return string[i];
  	}
  }
  return "All characters are repeated";
};
