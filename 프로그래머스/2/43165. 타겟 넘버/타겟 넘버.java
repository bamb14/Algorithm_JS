import java.util.*;

class Solution {
    List<Integer> list = new ArrayList<>();
    public int solution(int[] numbers, int target) {
        
        dfs(0, 0, numbers);
        
        int answer=0;
        for(int n : list){
            if(n==target) answer++;
        }
        return answer;
    }
    
     public void dfs(int num, int idx, int[] numbers){
        if(idx>=numbers.length){
            list.add(num);
            return;
        }

        dfs(num+numbers[idx], idx+1, numbers);
        dfs(num-numbers[idx], idx+1, numbers);
    }
}