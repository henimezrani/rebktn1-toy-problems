/*
*
* Linked List Intersection
*
* Write a function linkedListIntersection that returns the node 
* at which the intersection of two linked lists begins, 
* or null if there is no such intersection.
* 
* Example:
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return D 
* as the node of intersection.
* 
*    A → B → C
*             ↘
*               D → E → F
*             ↗
*        X → Y
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return NULL 
* as there is no point of intersection.
* 
*    A → B → C → D
*    X → Y → Z
* 
*/

// Helper function (do not edit)
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}



function linkedListIntersection(list1, list2) {
  var l1CurrentNode = list1
  var l2CurrentNode = list2
  while (l1CurrentNode.next) {
    l2CurrentNode = list2
    while(l2CurrentNode.next) {
      if (l1CurrentNode.next === l2CurrentNode.next) {
        return l1CurrentNode.next
      }
      l2CurrentNode = l2CurrentNode.next
    }
    l1CurrentNode = l1CurrentNode.next
  }
  return null
}


var zero = Node(0);
var one = Node(1);
var two = Node(2);
var three = Node(3);
var four = Node(4);
var five = Node(5);
var six = Node(6);

zero.next = one;
two.next = three;

five.next = six
four.next = five

one.next = four
three.next = four