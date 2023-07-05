class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;

    this.tail = null;
    let current = this.head;
    let prev = this.head;

    while (current.next) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) return undefined;

    let counter = 0;
    let currentNode = this.head;
    while (counter < pos) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  //naive
  // insert(index, val) {
  //   let newNode = new Node(val);
  //   if (!this.head) {
  //     this.head = newNode;
  //     this.tail = newNode;
  //     this.length = 1;
  //     return newNode;
  //   }

  //   let counter = 0;
  //   let prevNode = this.head;
  //   let currentNode = this.head;

  //   while (counter < index) {
  //     prevNode = currentNode;
  //     currentNode = currentNode.next;
  //     counter++;
  //   }
  //   if (index === this.length) {
  //     this.tail = newNode;
  //   }
  //   prevNode.next = newNode;
  //   newNode.next = currentNode;
  //   this.length++;

  //   return newNode;
  // }
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return undefined;
    }
    if (index === 0) {
      return !!list.unshift(val);
    }
    if (index === this.length) {
      return !!list.push(val);
    }

    let newNode = new Node(val);
    let foundNode = list.get(index - 1);
    newNode.next = foundNode.next;
    foundNode.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.shift();

    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    if (index === this.length) this.tail = prevNode;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let list = new singlyLinkedList();
list.push("Hello");
list.push("world!");
// list.pop();
// list.shift();
// list.unshift(1);
// list.get(1);
// list.set(0, "phani!");
// list.insert(1, "phani!");
// list.remove(1);
list.reverse();
console.log(list);
