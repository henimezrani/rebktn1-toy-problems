/*
Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.


characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

characterFrequency("") -->  [ ]
*/

function characterFrequency(string) {
	var object = {};
	var result = [];
	for (var i = 0 ; i < string.length ; i++) {
		if (object[string[i]]) {
			object[string[i]]++;
		} else {
			object[string[i]] = 1;
		}
	}
	for (var key in object) {
		result.push([key, object[key]])
	}
	result.sort(function(a,b) {
		return b[1]-a[1];
	})

	return result;
}