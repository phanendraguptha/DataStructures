class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.list = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.list.push(newNode);
    let length = this.list.length;

    // don't perform any action if length is 1
    if (length === 1) return;
    let index = length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    // bubble up
    while (
      parentIndex >= 0 &&
      this.list[parentIndex].priority < newNode.priority
    ) {
      let temp = this.list[parentIndex];
      this.list[parentIndex] = newNode;
      this.list[index] = temp;

      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  dequeue() {
    let maxItem = this.list[0];
    const end = this.list.pop();
    if (this.list.length === 0) return maxItem;
    this.list[0] = end;

    // bubble down
    let idx = 0;
    const length = this.list.length;
    const element = this.list[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.list[leftChildIdx];
        if (leftChild.priority > element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.list[rightChildIdx];
        if (
          (swap === null && rightChild.priority > element) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.list[idx] = this.list[swap];
      this.list[swap] = element;
    }

    return maxItem;
  }
}

let pq = new PriorityQueue();
pq.enqueue("common cold", 1);
pq.enqueue("gunshot", 5);
pq.enqueue("high fever", 2);
console.log(pq);
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq);
