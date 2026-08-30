class Solution {
    public long solution(int n, int[] times) {
        long answer = 0;
        long left=1;
        long right = 1_000_000_000_000_000_000L;
        
        while(left<=right){
            long mid = (left + right) / 2;
            
            if(check(mid, n, times)) {
                answer=mid;
                right=mid-1;
            }
            else left=mid+1;
        }
        return answer;
    }
    public boolean check(long mid, int n, int[] times){
        long sum=0;
        
        for(int t : times) sum += mid/t;
        
        if(sum>=n) return true;
        return false;
    }
}