/*
Implement a function that finds the longest palindrome in a given string. 
For example, in the string "My dad is a racecar athlete", the longest palindrome is "a racecar a". 
Count whitespaces as valid characters. 
Other palindromes in the above string include "dad", "ete", " dad " (including whitespace on each side of dad).
*/

function longestPalindrome(string) {
  var start = 0;
  var end = 0;
  for (var i = 0; i < string.length; i++) {
    var len1 = expandAroundCenter(string, i, i);
    var len2 = expandAroundCenter(string, i, i + 1);
    var len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - (len - 1) / 2;
      end = i + len / 2;
    }
  }
  return string.slice(start, end + 1);
}

function expandAroundCenter(string, left, right) {
  while (
    left >= 0 &&
    right < string.length &&
    string.charAt(left) == string.charAt(right)
  ) {
    left--;
    right++;
  }
  return right - left - 1;
}
