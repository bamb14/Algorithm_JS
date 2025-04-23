import java.util.*;

public class Solution {
    public int[] solution(int []arr) {
        List<Integer> list = new ArrayList<>();
        int curr=-1;
        for(int n : arr){
            if(curr!=n){
                curr=n;
                list.add(n);
            }
        }
        int[] answer = list.stream().mapToInt(i -> i).toArray();
        return answer;
    }
}