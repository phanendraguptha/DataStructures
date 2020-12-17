class binarySearchTree{
  Node root;
  class Node{
    int value;
    Node left;
    Node right;
    Node(int value){
      this.value = value;
    }
  }

  public void insert(int data){
    root = insertRecursive(root, data);
  }

  public Node insertRecursive(Node root,int data){
    Node newNode = new Node(data);
    if(root == null){
      root = newNode;
      return root;
    }
    if(root.value == data){
      return root;
    }//this if statement will be usefull when if the value is already present in the tree this will prevent going into infinite loop
    if(data < root.value){
      root.left = insertRecursive(root.left, data);
    }
    if(data > root.value){
      root.right = insertRecursive(root.right, data);
    }    
    return root;
  }

  public static void main(String[] args){
    binarySearchTree tree = new binarySearchTree();
    //      15
    //   7      20
    // 3  9   17  24
    tree.insert(15);
    tree.insert(7);
    tree.insert(20);
    tree.insert(3);
    tree.insert(9);
    tree.insert(9);
    System.out.println(tree.root.value);
    System.out.println(tree.root.left.value);
    System.out.println(tree.root.right.value);
    System.out.println(tree.root.left.left.value);
    System.out.println(tree.root.left.right.value);
  }
}