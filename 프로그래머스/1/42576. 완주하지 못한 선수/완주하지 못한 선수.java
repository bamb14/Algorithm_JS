import java.util.*;

class Solution {
    public String solution(String[] participant, String[] completion) {
        HashMap<String, Integer> map = new HashMap<>();
        
        for(String name : participant){
            map.put(name, map.getOrDefault(name,0)+1);
        }
        
        for(String name : completion){
            if(map.get(name)>1) map.put(name, map.get(name)-1);
            else map.remove(name);
        }
        for (String key : map.keySet()){
            return key;
        }
        return map.keySet().iterator().next();
    }
}