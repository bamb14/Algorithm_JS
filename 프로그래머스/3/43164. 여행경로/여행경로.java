import java.util.*;
class Solution {
    class Pair{
        String key;
        int idx;

        Pair(String key, int idx){
            this.key = key;
            this.idx = idx;
        }
    }
    Map<String, List<Pair>> map = new HashMap<>();
    String[] answer;
    public String[] solution(String[][] tickets) {
        int len = tickets.length;
        
        for(int i=0; i<len; i++){
            String[] ticket = tickets[i];
            map.computeIfAbsent(ticket[0], v-> new ArrayList<>()).add(new Pair(ticket[1], i));
        }
        
        for(List<Pair> list : map.values()) {
            list.sort((a,b)-> a.key.compareTo(b.key));
        }
        List<String> route = new ArrayList<>();
        route.add("ICN");
        bt("ICN", route, new boolean[len]);
        
        return answer;
    }
    
    public void bt(String cur, List<String> route, boolean[] visited){
        if(answer != null) return;
        
        if(route.size()>=visited.length+1){
            answer = route.toArray(new String[0]);
            return;
        }
        
        List<Pair> nexts = map.get(cur);
        if(nexts == null) return;
        for(Pair next: nexts){
            if(visited[next.idx]==false){
                visited[next.idx]=true;
                route.add(next.key);
                bt(next.key, route, visited);
                route.remove(route.size()-1);
                visited[next.idx]=false;
            }
        }
        
    }
}