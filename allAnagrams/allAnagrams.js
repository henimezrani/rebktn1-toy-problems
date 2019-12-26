/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

  // Factorial complexity

var allAnagrams = function(string, res, currentWord) {
  var chars = string.split('');
  var result = result || []
  var currentWord = currentWord || ''


  for (var i = 0 ; i < chars.length ; i++) {
    currentWord += chars[i]
    if (chars.length === 1) {
      console.log(currentWord)
      result.push(currentWord)
    } else {
      chars.slice(0,i).concat(chars.slice(i+1)).join('')
      allAnagrams(chars.slice(0,i).concat(chars.slice(i+1)).join(''), result, currentWord)
    }

  }

  return result
};
