import java.util.*;
class Solution {
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
        
        Queue<String> queue = new LinkedList<>();
        queue.offer(begin);
        
        Set<String> visited = new HashSet<>();
        visited.add(begin);
        int answer=0;
        while(!queue.isEmpty()){
            String curr = queue.poll();
            
            List<String> neighbor = map.get(curr);
            answer++;
            // System.out.println(curr+ " "+answer);
            for(String word : neighbor){
                if(visited.contains(word)) continue;
                
                if(word.equals(target)) return answer;
                queue.offer(word);
                visited.add(word);
            }
        }
        return 0;
    }
}