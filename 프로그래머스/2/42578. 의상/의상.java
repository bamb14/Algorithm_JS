import java.util.*;
class Solution {
    public int solution(String[][] clothes) {
        Map<String, Integer> map = new HashMap<>();
        for(String[] comb:clothes){
            map.put(comb[1], map.getOrDefault(comb[1],0)+1);
        }
        int answer=1;
        Iterator<Integer> iter = map.values().iterator();
        while(iter.hasNext()){
            answer*=(iter.next()+1);
        }
        return answer-1;
    }
}