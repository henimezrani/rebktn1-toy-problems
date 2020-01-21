/*
Number to English

Write a function numberToEnglish, it should take a number and return the number as a string using English words.


numbertoEnglish(7) // "seven"
numberToEnglish(575) // "five hundred seventy-five"
numberToEnglish(78193512) // "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*/

// HELPERS

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
};

var numbersToPlace = {
  10: 'ten',                          //2
  100: 'hundred',                     //3
  1000: 'thousand',                   //4
  1000000: 'million',                 //7
  1000000000: 'billion',              //9
  1000000000000: 'trillion',          //12
  1000000000000000: 'quadrillion',    //15
  1000000000000000000: 'quintillion'  //18
};

function numberToEnglish(number, result) {
  result = result || ''
  console.log(result)
  if (number == 0) return result
  if (number.toString().length < 4) {
    return result + ' ' + maxThreeDigitNumberToEnglish(number)
  } else {
    var base = number.toString().length
    var start = base
    while (base > 2 || number !== 0) {
      while(!numbersToPlace[Math.pow(10,start)]) {
        start--;
      }
      console.log('hi')
      var tmpNum;
      if (start === base ) {
        start = start - 3
        tmpNum = number.toString().slice(0, 3)
      } else {
        tmpNum = number.toString().slice(0, base - start)
      }
      result += maxThreeDigitNumberToEnglish(parseInt(number.toString().slice(0, base-start))) + " " + numbersToPlace[Math.pow(10,start)] + ' '
      numberToEnglish((parseInt(number.toString().slice(base-start))), result)
    }
  }
}



  // while (base > 0) {
  //   var base = number.toString().length
  //   while(!numbersToPlace[length]) {
  //     base--;
  //   }
  //   new tmpNbr = Math.floor(number / 10*(base-1))
  // }
  // main = Math.floor(number/base)
  // rest = number%base


function maxThreeDigitNumberToEnglish(number) {
  switch(number.toString().length) {
    case 1:
      return numbersToWords[number]
      break;
    case 2:
      if (numbersToWords[number]) {
        return numbersToWords[number]
      }
      return numbersToWords[Math.floor(number/10)*10] + ' ' + numbersToWords[number%10]
      break;
    case 3:
      return numbersToWords[Math.floor(number/100)] + ' hundred ' + maxThreeDigitNumberToEnglish(number%100)
      break;
  }
}
