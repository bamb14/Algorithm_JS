class Solution {
    public int solution(int left, int right) {
        int answer=0;
        for(int i=left; i<=right; i++){
            int cnt=get(i);
            if(cnt%2==0) answer+=i;
            else answer-=i;
        }
        return answer;
    }
    
    public static int get(int n){
        int total=1;
        for(int i=2; i<=n; i++){
            if(n%i==0) total++;
        }
        return total;
    }
}