class Solution {
    public int solution(int[][] triangle) {
        int[][] dp=new int[500][501];
        dp[0][0]=triangle[0][0];
        for(int i=1; i<triangle.length; i++){
            int[] arr=triangle[i];
            for(int j=0; j<arr.length; j++){
                if(j==0) dp[i][0]=dp[i-1][0]+arr[j];
                else if(j==arr.length-1) dp[i][j]=dp[i-1][j-1]+arr[j];
                else{
                    dp[i][j]=Math.max(dp[i-1][j], dp[i-1][j-1])+arr[j];
                }
                // System.out.println(i+" "+j+" "+dp[i][j]);
            }
        }
        int answer=0;
        for(int i:dp[triangle.length-1]){
            // System.out.print(i);
            answer=Math.max(answer, i);
        }
        return answer;
    }
}