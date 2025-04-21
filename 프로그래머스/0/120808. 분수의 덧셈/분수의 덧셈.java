class Solution {
    public int[] solution(int numer1, int denom1, int numer2, int denom2) {
        int n1=numer1*denom2 + denom1*numer2;
        int n2=denom1*denom2;
        int big=Math.max(n1,n2);
        for(int i=big; i>=2; i--){
            if(n1%i==0 && n2%i==0){
                n1/=i;
                n2/=i;
            }
        }
        int[] answer = new int[2];
        answer[0]=n1;
        answer[1]=n2;
        return answer;
    }
}