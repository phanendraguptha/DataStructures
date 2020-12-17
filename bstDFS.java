// import java.util.Stack;

class bstDFS{
  Node root;
  static class Node{
    int value;
    Node left;
    Node right;

    Node(int data){
      value = data;
    }
  }

  // public void printPreorder(){
  //   Stack<Node> stack = new Stack<Node>();
  //   stack.push(root);
  //   while(!stack.empty()){
  //     Node tempNode = stack.pop();
  //     System.out.println(tempNode.value);
  //     if(tempNode.right != null){
  //       stack.push(tempNode.right);
  //     }
  //     if(tempNode.left != null){
  //       stack.push(tempNode.left);
  //     }
  //   }
  // }

  public void printPreorder(){
    printPreorder(root);
  }
  
  public void printInorder(){
    printInorder(root);
  }

  public void printPostorder(){
    printPostorder(root);
  }

  public void printPreorder(Node node){
    if(node == null) return;
    System.out.println(node.value);
    printPreorder(node.left);
    printPreorder(node.right);
  }

  void printInorder(Node node){
    if(node == null)  return;
    printInorder(node.left);
    System.out.println(node.value);
    printInorder(node.right);
  }

  void printPostorder(Node node){
    if(node == null) return;
    printPostorder(node.left);
    printPostorder(node.right);
    System.out.println(node.value);
  }

  public static void main(String[] args){
    //      15
    //   7      20
    // 3  9   
    bstDFS tree = new bstDFS();

    tree.root = new Node(15);
    tree.root.left = new Node(7);
    tree.root.right = new Node(20);
    tree.root.left.left = new Node(3);
    tree.root.left.right = new Node(9);
    // print the tree in preorder
    tree.printPreorder();    
    System.out.println("*******");
    // print the tree in Inorder
    tree.printInorder();
    System.out.println("*******");
    // print the tree in Postorder
    tree.printPostorder();
  }
}