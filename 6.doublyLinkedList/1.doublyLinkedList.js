class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    let node = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = node.prev;
      this.tail.next = null;
      node.prev = null;
    }
    this.length--;
    return node;
  }

  shift() {
    if (!this.head) return undefined;

    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let node;
    if (index < this.length / 2) {
      node = this.head;
      for (let i = 0; i < index; i++) {
        node = node.next;
      }
    } else {
      node = this.tail;
      for (let i = 0; i < this.length - 1 - index; i++) {
        node = node.prev;
      }
    }
    return node;
  }

  set(index, val) {
    let foundNode = this.get(index);

    if (!foundNode) {
      return false;
    }
    foundNode.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) !!this.unshift(val);
    if (index === this.length) !!this.push(val);

    let newNode = new Node(val);
    let prevNode = this.get(index - 1);

    newNode.next = prevNode.next;
    newNode.prev = prevNode;
    prevNode.next.prev = newNode;
    prevNode.next = newNode;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();

    let foundNode = this.get(index);
    let prevNode = foundNode.prev;
    prevNode.next = foundNode.next;
    foundNode.next.prev = prevNode.prev;
    foundNode.prev = null;
    foundNode.next = null;
    this.length--;
    return foundNode;
  }
}

const list = new DoublyLinkedList();
list.push("hello");
list.push("world");
// list.pop();
// list.shift();
// list.unshift(1);
// list.get(3);
// list.set(1, "phani!");
list.insert(1, "phani!");
// list.remove(1);
console.log(list);
