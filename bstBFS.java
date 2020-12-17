import java.util.LinkedList;
import java.util.Queue;

class bstBFS{
  Node root;

  static class Node{
    int value;
    Node left;
    Node right;
  
    Node(int data){
      value = data;
    }
  }

  public void printLevelOrder(){
    Queue<Node> queue = new LinkedList<Node>();
    queue.add(root);

    while(!queue.isEmpty()){
      Node tempNode = queue.poll();
      System.out.println(tempNode.value);

      if(tempNode.left!=null){
        queue.add(tempNode.left);
      }
      if(tempNode.right!=null){
        queue.add(tempNode.right);
      }
    }
  }

  public static void main(String[] args){
    bstBFS tree = new bstBFS();
    tree.root = new Node(5);
    tree.root.left = new Node(2);
    tree.root.right = new Node(7);

    // System.out.println(tree.root.value);
    tree.printLevelOrder();
  }
}