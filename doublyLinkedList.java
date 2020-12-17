public class doublyLinkedList{
  Node head;
  static class Node {
    int value;
    Node next;
    Node prev;

    Node(int data){
      value = data;
      prev = null;
      next = null;
    }
  }
  
  public static doublyLinkedList insert(doublyLinkedList list,int data){
    Node new_node = new Node(data);
    if(list.head == null){
      new_node.value = data;
      new_node.next = null;
      new_node.prev = null;
      list.head=new_node;
    }
    else{
      Node currentNode = list.head;
      Node prev=null;
      while(currentNode!=null){        
        prev = currentNode;
        currentNode = currentNode.next;
      }
      prev.next = new_node;
      new_node.prev = currentNode;
      new_node.next = null;
    }
    return list;
  }

  public static doublyLinkedList insertAfter(doublyLinkedList list,Node after,int data){
    Node currentNode = list.head;
    Node new_node = new Node(data);
    while(currentNode.next == after){
      // System.out.println(currentNode.value);
      currentNode = currentNode.next;
    }
    new_node.prev = currentNode;
    new_node.next = currentNode.next;
    if(currentNode.next != null){
      currentNode.next.prev= new_node;
    }
    currentNode.next = new_node;
    return list;
  }

  public static doublyLinkedList deleteHead(doublyLinkedList list){
    Node currentNode = list.head;
    list.head = currentNode.next;
    list.head.prev = null;
    return list;
  }

  public static doublyLinkedList deleteTail(doublyLinkedList list){
    Node currentNode = list.head;
    while(currentNode.next!=null){
      currentNode=currentNode.next;
    }
    currentNode.prev.next = null;
    return list;
  }

  public static doublyLinkedList deleteByIndex(doublyLinkedList list,int index){
    int count = 0;
    Node currentNode = list.head;
    while(count==index){
      currentNode=currentNode.next;
      count+=1;
    }
    currentNode.next.next.prev = currentNode;
    currentNode.next = currentNode.next.next;
    return list;
  }

  public static doublyLinkedList reverse(doublyLinkedList list){
    Node currentNode = list.head,temp = null;
    while(currentNode!=null){
      temp = currentNode.prev;
      currentNode.prev = currentNode.next;
      currentNode.next = temp;
      currentNode = currentNode.prev;
    }
    if(temp!=null){
      list.head = temp.prev;
    }
    return list;
  }

  public static void printList(doublyLinkedList list){
    Node currentNode = list.head;
    while(currentNode!=null){
      System.out.println(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  public static void main(String[] args){
    doublyLinkedList list = new doublyLinkedList();
    list = insert(list,5);
    list = insert(list,2);
    list = insert(list,7);
    printList(list);
    System.out.println("------");
    list = insertAfter(list,list.head.next,3);
    printList(list);
    System.out.println("------");
    deleteHead(list);
    printList(list);
    System.out.println("------");
    deleteTail(list);
    printList(list);
    System.out.println("------");
    list = insert(list,6);
    printList(list);
    System.out.println("------");
    deleteByIndex(list,1);
    printList(list);
    System.out.println("------");
    reverse(list);
    printList(list);
  }
}