class Solution {
    public int[] solution(int brown, int yellow) {
        int yellow_height=0;
        int yellow_width=0;
        for(int i=1; i<=yellow; i++){
            if(yellow%i==0){ // i는 세로 길이 후보
                int height=i;
                int width=yellow/i;
                // System.out.println(height+" "+ width);
                if((width+2)*2+height*2==brown){
                    yellow_height=height;
                    yellow_width=width;
                    break;
                }
            }
        }
        
        return new int[]{yellow_width+2, yellow_height+2};
    }
}