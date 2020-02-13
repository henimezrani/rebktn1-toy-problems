/*
Quicksort

Quicksort (sometimes called partition-exchange sort) is an efficient sorting algorithm. 
When implemented well, it can be about two or three times faster than its main competitors, merge sort and heapsort.

It is a comparison sort, meaning that it can sort items of any type for which a "less-than" relation is defined.

Quicksort uses these steps.

  1. Choose any element of the array to be the pivot. There are multiple ways of selecting a pivot; explore the options and note their advantages.
  2. Divide all other elements (except the pivot) into two partitions.
  3. All elements less than the pivot must be in the first partition.
  4. All elements greater than the pivot must be in the second partition.
  5. Recursively apply the above process to the two partitions
  6. Join the first sorted partition, the pivot, and the second sorted partition.

The best pivot creates partitions of equal length (or lengths differing by 1). 
The worst pivot creates an empty partition (for example, if the pivot is the first or last element of a sorted array).

Extra Credit: Perform the sort in place. Watch how at https://www.youtube.com/watch?v=ywWBy6J5gz8

NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).
*/

var items = [5, 3, 7, 6, 2, 9];
function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}
function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)];
  var i = left;
  var j = right;
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(arr, left, right) {
  var index;
  if (arr.length > 1) {
    index = partition(arr, left, right);
    if (left < index - 1) {
      quickSort(arr, left, index - 1);
    }
    if (index < right) {
      quickSort(arr, index, right);
    }
  }
  return arr;
}
