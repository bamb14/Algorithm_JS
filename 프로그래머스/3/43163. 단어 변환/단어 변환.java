import java.util.*;
class Solution {
    class Pair{
        String word;
        int n;

        Pair(String word, int n){
            this.word = word;
            this.n = n;
        }
    }
    
    public int solution(String begin, String target, String[] words) {
        List<String> list = new ArrayList<>(Arrays.asList(words));
        if(!list.contains(target)) return 0;
        list.add(begin);
        
        // 인접리스트
        Map<String, List<String>> map = new HashMap<>();
        
        for(String w1 : list){
            List<String> neighbor = new ArrayList<>();
            for(String w2 : list){
                if(w1.equals(w2)) continue;
                int cnt=0;
                for(int i=0; i<w1.length(); i++){
                    if(w1.charAt(i) != w2.charAt(i)) cnt++;
                }
                if(cnt==1) neighbor.add(w2);
            
            }
            map.put(w1, neighbor);
        }
        
        // BFS
        Queue<Pair> queue = new LinkedList<>();
        queue.offer(new Pair(begin, 0));
        
        Set<String> visited = new HashSet<>();
        visited.add(begin);
        
        while(!queue.isEmpty()){
            Pair pair = queue.poll();
            String curr = pair.word;
            
            for(String next : map.get(curr)){
                if(visited.contains(next)) continue;
                
                if(next.equals(target)) return pair.n+1;
                
                queue.offer(new Pair(next, pair.n+1));
                visited.add(next);
            }
        }
        return 0;
    }
}