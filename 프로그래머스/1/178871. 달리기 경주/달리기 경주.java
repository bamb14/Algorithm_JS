import java.util.*;

class Solution {
    public String[] solution(String[] players, String[] callings) {
        // 선수 이름 → 인덱스 저장
        Map<String, Integer> map = new HashMap<>();
        for (int i = 0; i < players.length; i++) {
            map.put(players[i], i);
        }
        
        for(String name : callings){
            int index=map.get(name);
            String temp=players[index-1];
            players[index-1]=name;
            players[index]=temp;
            
            map.put(temp, index);
            map.put(name, index-1);
        }
        return players;
    }
    
    public static int indexOf(String[] arr, String target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i].equals(target)) {
                return i; // 찾으면 인덱스 반환
            }
        }
        return -1; // 못 찾으면 -1
    }
}