class MaxBinaryHeap {
  constructor() {
    this.list = [];
  }

  insert(num) {
    this.list.push(num);
    let index = this.list.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    // bubble up
    while (this.list[parentIndex] < num) {
      let temp = this.list[parentIndex];
      this.list[parentIndex] = num;
      this.list[index] = temp;

      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  extractMax() {
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
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.list[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeap();
heap.insert(100);
heap.insert(58);
heap.insert(65);
heap.insert(150);
heap.insert(200);
console.log(heap.extractMax());
console.log(heap);
