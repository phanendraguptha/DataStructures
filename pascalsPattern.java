import java.util.*;
public class pascalsPattern
{
	public static void main(String[] args){
		Scanner in = new Scanner(System.in);
		System.out.print("Enter any number ");
		int no = in.nextInt();
		// int number = 1;
		for(int i=0;i<no;i++){
			for(int j=no;j>i;j--){
				System.out.print(" ");
			}
			// number = 1;
			for(int k=0;k<=i;k++){
				System.out.print("* ");
				// System.out.print(number+" ");
				// number = number * (i-k)/(k+1);
			}
			System.out.println();
		}
		// reverse pattern
		for(int i=no; i>0 ; i--){
			for(int k=no+1;k>i;k--){
				System.out.print(" ");
			}
			for(int j=0;j<i;j++){
				System.out.print("* ");
			}
			System.out.println();
		}
		in.close();
	}
}