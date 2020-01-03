/*
Longest Run

Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

longestRun("abbbcc") // [ 1, 3 ]
longestRun("aabbc") // [ 0, 1 ] Only wrong test case
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
longestRun("abccccccc") // [ 2, 8 ]
*/

function longestRun(string) {
  var end = 0
  var start = 0
  var result = [start, end];
  var tmpResult = []
  for (var i = 0 ; i < string.length ; i++) {
    if (i !== 0 && string[i] !== string[i-1]) {
      if ((i-1) - (end+1) > result[1] - result[0]) {
        result = [end +1, i-1]
      }
      start = end
      end = i-1
    } else {
      tmpResult = [end+1, i]
    }
  }
  if (tmpResult !== undefined && tmpResult[1] - tmpResult[0] > result[1] - result[0]) {
    return tmpResult
  }
  return result
}
