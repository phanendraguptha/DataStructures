class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //with this implementation push and pop takes constant time
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;

    return this;
  }
  pop() {
    if (!this.first) return undefined;
    let currentHead = this.first;
    this.first = currentHead.next;
    this.size--;
    if (this.size === 0) {
      this.last = null;
    }
    return currentHead;
  }

  //this implementation of pop is not a constant time
  // push(val) {
  //   let newNode = new Node(val);

  //   if (!this.first) {
  //     this.first = newNode;
  //     this.last = newNode;
  //   } else {
  //     this.last.next = newNode;
  //     this.last = newNode;
  //   }
  //   this.size++;
  //   return this;
  // }
  // pop() {
  //   if (!this.first) return undefined;

  //   let removedNode = this.last;
  //   if (this.size === 1) {
  //     this.first = null;
  //     this.last = null;
  //   } else {
  //     let prevNode = this.first;
  //     for (let i = 0; i < this.size - 2; i++) {
  //       prevNode = prevNode.next;
  //     }
  //     prevNode.next = null;
  //     this.last = prevNode;
  //   }
  //   this.size--;

  //   return removedNode;
  // }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.pop();
console.log(stack);
