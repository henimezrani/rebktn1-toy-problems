// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.

var consonants9Forward = ['b','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
var vowels5Back = ['a','i','u']
var exceptions = {
	'c': 1,
	'o': 1,
	'd': 3,
	'e': 4
}
var OriginalAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function generateNewAlphabet() {
	var newAlphabet = OriginalAlphabet.map(x => x);
	for (var i = 0 ; i < 26; i++) {
		console.log(newAlphabet.length)
		if (consonants9Forward.indexOf(newAlphabet[i]) >=0) {
			move(newAlphabet, i, 9, 'forward')
		} else if (vowels5Back.indexOf(newAlphabet[i]) >=0) {
			move(newAlphabet, i, 5, 'back')
		} else {
			move(newAlphabet, i, exceptions[newAlphabet[i]], 'back')
		}
	}
	for (var i = 0 ; i < newAlphabet.length; i++) {
		if (exceptions[newAlphabet[i]]) {
			newAlphabet[i] = OriginalAlphabet[i]
		}
	}
	return newAlphabet;
}

function move(array, index, iterations, direction){
	if (direction === 'forward') {
		for (var i = index; i < index+iterations ; i++) {
			if (i === array.length-1) {
				[array[i],array[i+1-array.length]] = [array[i+1-array.length],array[i]]
			}
			if (i >= array.length) {
				[array[i-array.length],array[i+1-array.length]] = [array[i+1-array.length],array[i-array.length]]
			} else {
				[array[i],array[i+1]] = [array[i+1],array[i]]
			}
		}
	} else {
		for (var i = index; i > index-iterations ; i--) {
			if (i === 0) {
				[array[i], array[i-1+array.length]] = [array[i-1+array.length], array[i]]
			} else if (i < 0) {
				[array[i+array.length],array[i-1+array.length]] = [array[i-1+array.length],array[i+array.length]]
			} else {
				[array[i],array[i-1]] = [array[i-1],array[i]]
			}
		}
	}

	return array
}

function vowelBack(string) {
	var newAlphabet = generateNewAlphabet()
	for (var i =0 ; i < string.length ; i++) {
		string[i] = newAlphabet[OriginalAlphabet.indexOf(string[i])]
	}
	return string;
}

