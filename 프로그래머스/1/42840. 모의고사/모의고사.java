import java.util.*;
class Solution {
    public int[] solution(int[] answers) {
        int[] p1=new int[]{1,2,3,4,5}; // 5개 반복
        int[] p2=new int[]{2,1,2,3,2,4,2,5}; // 8개 반복
        int[] p3=new int[]{3,3,1,1,2,2,4,4,5,5}; // 10개 반복
        int[] cnt=new int[3];
        
        for(int i=0; i<answers.length; i++){
            if(answers[i]==p1[i%5]) cnt[0]++;
            if(answers[i]==p2[i%8]) cnt[1]++;
            if(answers[i]==p3[i%10]) cnt[2]++;
        }
        List<Integer> answer = new ArrayList<>();
        int max = cnt[0];
        for(int i=1; i<=3; i++){
            int n=cnt[i-1];
            if(n>max){
                answer.clear();
                answer.add(i);
                max=n;
            }else if(n==max) answer.add(i);
        }

        int[] result=answer.stream().mapToInt(i->i).toArray();
        return result;
    }
}