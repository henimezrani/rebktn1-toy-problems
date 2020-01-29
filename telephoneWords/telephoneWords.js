/*
Each number key on a standard phone keypad has a set of Latin letters written on it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg

Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable. But there are a lot of combinations!

Write a function that takes up to four digits of a phone number, and returns a list of all of the words (in alphabetical order) that can be written on the phone with that number (you should return all permutations, not only English words).


telephoneWords("0002") // [ "000A", "000B", "000C" ]
telephoneWords("1123") // [ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]
*/

function telephoneWords(digitString) {
  var tmpArr = []
  var resultArr = []
  for (var i = 0; i < digitString.length; i++) {
    switch(digitString[i]) {
      case '0' : 
      tmpArr.push('0')
      break;
      case '1' : 
      tmpArr.push('1')
      break;
      case '2' : 
      tmpArr.push('ABC')
      break;
      case '3' : 
      tmpArr.push('DEF')
      break;
      case '4' : 
      tmpArr.push('GHI')
      break;
      case '5' : 
      tmpArr.push('JKL')
      break;
      case '6' : 
      tmpArr.push('MNO')
      break;
      case '7' : 
      tmpArr.push('PQRS')
      break;
      case '8' : 
      tmpArr.push('TUV')
      break;
      case '9' : 
      tmpArr.push('WXYZ')
      break;
      default: 
      return "invalid input"
    }
  }
}

