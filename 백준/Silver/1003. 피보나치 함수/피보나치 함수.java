import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        List<Integer> input= new ArrayList<>();
        
        int[] dp0=new int[41];
        int[] dp1=new int[41];
        dp0[0]=1;
        dp0[1]=0;
        dp0[2]=1;
        dp1[0]=0;
        dp1[1]=1;
        dp1[2]=1;
        for(int j=0; j<N; j++){
          int n = Integer.parseInt(br.readLine());
          for(int i=3; i<=n; i++){
            dp0[i]=dp0[i-1]+dp0[i-2];
            dp1[i]=dp1[i-1]+dp1[i-2];
          }
          System.out.println(dp0[n]+ " " +dp1[n]);
        }
    }
}