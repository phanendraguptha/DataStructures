// import java.io.*;
public class singlyLinkedList
{
  Node head;
  static class Node{
    int value;
    Node next;

    Node(int d){
      value = d;
      next = null;
    }
  }

  public static singlyLinkedList insert(singlyLinkedList list, int data){
    Node new_node = new Node(data);
    new_node.next = null;
    if(list.head == null){
      list.head = new_node;
    }
    else{
      Node last = list.head;
      while(last.next != null){
        last = last.next;
      }
      last.next = new_node;
    }
    return list;
  }

  public static void printList(singlyLinkedList list){
    Node first = list.head;
    while(first != null){
      System.out.println(first.value);
      first = first.next;
    }
  }

  public static singlyLinkedList deleteByKey(singlyLinkedList list,int key){
    Node currentNode = list.head,prev = null;
    if(currentNode!=null &&currentNode.value==key){
      list.head = currentNode.next;
      return list;
    }
    while(currentNode!=null && currentNode.value!=key){
       prev=currentNode;
       currentNode=currentNode.next;
    }
    if(currentNode!=null){
      prev.next = currentNode.next;
    }
    if (currentNode == null) { 
      System.out.println(key + " not found"); 
    } 
    return list;
  }

  public static singlyLinkedList deleteByIndex(singlyLinkedList list,int index){
    Node currentNode = list.head,prev=null;
    int count=0;
    if(index == 0&&currentNode!=null){
      list.head = currentNode.next;
      return list;
    }
    while(currentNode!=null){
      prev = currentNode;
      currentNode = currentNode.next;
      count++;
      if(index == count&&currentNode!=null){
        prev.next = currentNode.next;
        return list;
      }
    }
    // while(currentNode!=null){
    //   if(index == count&&currentNode!=null){
    //     prev.next = currentNode.next;
    //     break;
    //   }
    //   else{
    //     prev = currentNode;
    //     currentNode = currentNode.next;
    //     count++;
    //   }
    // }

    // while(currentNode==null){
    //   System.out.println("index is invalid");
    // }
    return list;
  }

  public static singlyLinkedList pop(singlyLinkedList list){
    Node currentNode = list.head,prev = null;
    while(currentNode.next!=null){
      prev=currentNode;
      currentNode = currentNode.next;
    }
    prev.next = null;
    return list;
  }

  public static singlyLinkedList reverse(singlyLinkedList list){
    Node currentNode = list.head,prev=null,next=null;
    while(currentNode!=null){
      next=currentNode.next;
      currentNode.next = prev;
      prev=currentNode;
      currentNode=next;
    }
    list.head = prev;
    return list;
  }

  public static void main(String[] args){
    singlyLinkedList list = new singlyLinkedList();
    list=insert(list,5);
    list=insert(list,3);
    list=insert(list,2);
    printList(list);
    System.out.println("------");
    deleteByKey(list,5);
    printList(list);
    System.out.println("------");
    list=insert(list,5);
    printList(list);
    System.out.println("------");
    deleteByKey(list,5);
    printList(list);
    System.out.println("------");
    deleteByIndex(list,1);
    printList(list);
    System.out.println("------");
    list=insert(list,7);
    list=insert(list,9);
    printList(list);
    System.out.println("------");
    pop(list);
    printList(list);
    System.out.println("------");
    list=insert(list,7);
    list=insert(list,9);
    printList(list);
    System.out.println("------");
    list=reverse(list);
    printList(list);
  }
}