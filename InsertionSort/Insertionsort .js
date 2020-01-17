// Sort a linked list using insertion sort.
// Algorithm of Insertion Sort:

//1- Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
//2- At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.
// 3-It repeats until no input elements remain.

// Example 1:

// Input: 4->2->1->3
// Output: 1->2->3->4
// Example 2:

// Input: -1->5->3->4->0
// Output: -1->0->3->4->5


// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  var currentNode = head.next
  while(currentNode.next) {
    var sortedNode = head
    while(sortedNode !== currentNode) {
      console.log(sortedNode, currentNode)
      if (currentNode.val < sortedNode.val){
        currentNode.next = sortedNode.next
        sortedNode.next = currentNode
      }
      sortedNode = sortedNode.next
    }
    currentNode = currentNode.next
  }
  return head
};

var head = {
  val: 1,
  next: {
    val: 5,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 0,
          next: null
        }
      }
    }
  }
}
