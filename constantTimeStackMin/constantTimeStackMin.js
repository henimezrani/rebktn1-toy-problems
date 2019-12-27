/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
var Stack = function() {
  this.storage = []
  this.end = 0
  this.minArr = [];
}

// add an item to the top of the stack
Stack.prototype.push = function(value) {
  if (this.storage.length === 0 || value < this.minArr[this.minArr.length-1]) {
    this.minArr.push(value);
  }
  this.storage.push(value);
  this.end++;
};

// remove an item from the top of the stack
Stack.prototype.pop = function() {
  var tmp = this.storage.pop()
  if (tmp === this.minArr[this.minArr.length-1]){
    this.minArr.pop();
  }
  this.end--;
};

// return the number of items in the stack
Stack.prototype.size = function() {
  return this.end;
};

// return the minimum value in the stack
Stack.prototype.min = function() {
  if (this.minArr.length === 0)
    return undefined;
  return this.minArr[this.minArr.length-1];
};


