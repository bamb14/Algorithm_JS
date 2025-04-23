class Solution {
    public int[] solution(int[] prices) {
        int len=prices.length;
        int[] answer = new int[len];
        
        for(int i=0; i<len-1; i++){
            int price=prices[i];
            int sec=0;
            for(int j=i+1; j<len; j++){
                sec++;
                if(price>prices[j]) break;
            }
            answer[i]=sec;
        }
        
        return answer;
    }
}