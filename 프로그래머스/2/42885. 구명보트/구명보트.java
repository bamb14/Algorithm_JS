import java.util.*;
class Solution {
    public int solution(int[] people, int limit) {
        List<Integer> list=new ArrayList<>();
        
        for(int n:people){
            list.add(n);
        }
        list.sort((a,b)->a-b);
        int left=0, right=people.length-1;
        int answer = 0;
        while(left<=right){
            if(list.get(left)+list.get(right)<=limit){
                left++;
            }
            right--;
            answer++;
        }
        
        return answer;
    }
}