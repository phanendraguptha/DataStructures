public class Main
{
    public static void sort(int[] arr){
        int n = arr.length; 
        for (int i = 0; i < n-1; i++){
          for (int j = i+1; j < n; j++){
                if (arr[i] > arr[j]) 
                {
                    int temp = arr[j]; 
                    arr[j] = arr[i]; 
                    arr[i] = temp; 
                }   
          }
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