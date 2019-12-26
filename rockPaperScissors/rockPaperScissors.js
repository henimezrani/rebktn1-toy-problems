/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function (n) {
  var result = []
  var combinations = Math.pow(3,n);
  for (var i = 0 ; i < combinations ; i++ ){
    result[i] = i.toString(3).toString()
    result[i] = result[i].replace(/0/g,'R')
    result[i] = result[i].replace(/1/g,'P')
    result[i] = result[i].replace(/2/g,'S')
  }
  return result;
};
