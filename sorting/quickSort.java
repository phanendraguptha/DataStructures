public class Main
{
    public static int partition(int[] arr, int low, int high){
        int i=low-1;
        int pivot = arr[high];
        
        for(int j=low;j<high;j++){
            if(arr[j]<pivot){
                i++;
                
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        int temp2=arr[i+1];
        arr[i+1]=arr[high];
        arr[high]=temp2;
        return i+1;
    }
    public static void quickSort(int[] arr,int low,int high){
        if(low<high){
            int pi = partition(arr,low,high);
            
            quickSort(arr,low,pi-1);
            quickSort(arr,pi+1,high);
        }
    }
	public static void main(String[] args) {
		int arr[] = {10, 7, 8, 9, 1, 5};
		
		quickSort(arr,0,arr.length-1);
		
		for(int i=0;i<arr.length;i++){
		    System.out.print(arr[i]+" ");
		}
	}
}