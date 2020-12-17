import java.util.*;
class binaryHeap{
  static ArrayList<Integer> al = new ArrayList<Integer>();
  
  // add at the end
  // compare with the parent
  // if parent is less than child replace

  public static void insert(int childval){
    al.add(childval);
    int childpos = al.indexOf(childval);
// if parentposition greater than or equals to 0
    int parentpos = (childpos-1)/2;
    if(parentpos>=0)
    checkParent(al.get(parentpos), parentpos, childval, childpos);
  }
  public static void checkParent(int parentval,int parentpos,int childval,int childpos){
    int pp,pv,cp,cv;
    if(parentval < childval){
      al.set(childpos,parentval);
      al.set(parentpos,childval);
      cp = parentpos;
      pp = (cp-1)/2;
      pv = al.get(pp);
      cv = al.get(cp);
      if(parentpos>=0)
        checkParent(pv, pp, cv, cp);
      else  return;
    }    
  }

  // setting first equals to last
  // delete the last value
  public static void sinkDown(){
    int last = al.size()-1;
    al.set(0,al.get(last));
    al.remove(last);
    int parentpos,parentval,lpos,lval,rpos,rval;
    parentpos = 0;
    int maxParentPos = (last-1)/2;
    while(parentpos<maxParentPos){
      parentval = al.get(parentpos);
      lpos = 2*parentpos+1;
      lval = al.get(lpos);
      rpos = lpos+1;
      rval = al.get(rpos);
      if(parentval<lval){
        al.set(parentpos,lval);
        al.set(lpos,parentval);
        parentval = lval;
      }
      if(parentval<rval){
        al.set(parentpos,rval);
        al.set(rpos,parentval);
      }
      parentpos+=1;
    }    
  }

  public static void main(String[] args){
    insert(49);
    insert(39);
    insert(33);
    insert(18);
    insert(27);
    insert(12);
    System.out.println(al);
    sinkDown();
    System.out.println(al);
  }
}