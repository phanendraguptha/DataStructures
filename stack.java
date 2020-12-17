class stack{
  Node root;
  static class Node{
    int value;
    Node next;

    Node(int data){
      value = data;
    }
  }

  public static stack push(stack s,int data){
    Node new_node = new Node(data);
    if(s.root == null){
      s.root = new_node;
    }
    else{
      Node temp = s.root;
      new_node.next = temp;
      s.root = new_node;

      // s.root.next = new_node;
    }
    return s;
  }

  public static void pop(stack s){
    if(s.root == null)
      System.out.println("there is nothing to pop");
    else{
      s.root = s.root.next;
    }
    // return s;
  }

  public static void print(stack s){
    if(s.root == null){
      System.out.println("stack is empty");
    }
    else{
      Node currentNode = s.root;
      while(currentNode !=null){
        System.out.println(currentNode.value);
        currentNode = currentNode.next;
      }
    }
  }

  public static void main(String[] args){
    stack s = new stack();
    s=push(s,5); 
    s=push(s,6); 
    print(s);
    System.out.println("----");
    pop(s);
    // pop(s);
    print(s);
  }
}