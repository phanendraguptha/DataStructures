public class Main
{
  public static void sort(int[] arr){
      int n = arr.length; 
      for (int i = 1; i < n; i++){
        
        int key = arr[i];
        int j=i-1;
        while(j>=0&&arr[j]>key){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=key;
      }
      
      for(int k:arr){
          System.out.print(k+" ");
      }
          
  }
	public static void main(String[] args) {
		int[] arr = {1,-55,8,6,15,22};
		
		sort(arr);
	}
}