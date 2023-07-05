class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let node = this.root;
    while (node) {
      if (val < node.val) {
        if (!node.left) {
          node.left = newNode;
          return this;
        }
        node = node.left;
      } else {
        if (!node.right) {
          node.right = newNode;
          return this;
        }
        node = node.right;
      }
    }
  }

  find(val) {
    if (!this.root) return undefined;

    let node = this.root;
    while (node) {
      if (node.val === val) return node;
      if (val < node.val) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
  }
}

let bst = new BinarySearchTree();
bst.insert(15);
bst.insert(40);
bst.insert(9);
bst.insert(7);
bst.insert(11);
bst.insert(30);
bst.insert(50);
bst.insert(45);
console.log(bst.find(15));
console.log(bst.find(40));
console.log(bst);
