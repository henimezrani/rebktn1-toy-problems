/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target, start, end) {
	var start = start || 0;
	var end = end || array.length-1;
	var mid = Math.floor(end-start+1/2);
	if (array.length === 0){
		return null;
	} else if (array[mid] === target) {
		return mid;
	} else if (array[mid] > target) {
		return binarySearch(array, target, start, mid-1)
	} else {
		return binarySearch(array, target, mid+1, end)
	}
};

