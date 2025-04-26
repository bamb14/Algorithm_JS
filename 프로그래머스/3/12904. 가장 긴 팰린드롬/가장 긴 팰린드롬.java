class Solution
{
    public int solution(String s)
    {
        int answer = 1;
        int n=s.length();
        for(int i=0; i<n-1; i++){
            int odd=count(s, i-1, i+1); // 홀수 길이 가정
            int even=1;
            if(s.charAt(i)==s.charAt(i+1)) even=count(s, i-1, i+2)+1; // 짝수 길이 가정
            
            answer=Math.max(answer, Math.max(odd, even));
        }

        return answer;
    }
    public int count(String s, int left, int right){
        int cnt=1;
        while(left>=0 && right<s.length() && s.charAt(left)==s.charAt(right)){
            cnt+=2;
            left--;
            right++;
        }
        return cnt;
    }
}