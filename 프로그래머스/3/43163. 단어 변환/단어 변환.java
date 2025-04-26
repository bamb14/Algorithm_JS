import java.util.*;
class Solution {
    HashMap<String, List<String>> map=new HashMap<>();
    HashSet<String> visited=new HashSet<>();
    public int solution(String begin, String target, String[] words) {
        for(int i=0; i<words.length; i++){
            visited.add(words[i]);
            for(int j=i+1; j<words.length; j++){
                if(isConnect(words[i],words[j])){
                    map.computeIfAbsent(words[i], value->new ArrayList<>()).add(words[j]);
                    map.computeIfAbsent(words[j], value->new ArrayList<>()).add(words[i]);
                }
            }
            // 🔥 begin과 연결되는 것도 map에 추가
            if (isConnect(begin, words[i])) {
                map.computeIfAbsent(begin, value -> new ArrayList<>()).add(words[i]);
                map.computeIfAbsent(words[i], value -> new ArrayList<>()).add(begin);
            }
        }
        
        return bfs(begin, target);
    }
    public boolean isConnect(String word1, String word2){
        int cnt=0;
        for(int i=0; i<word1.length(); i++){
            if(word1.charAt(i)!=word2.charAt(i)) cnt++;
            if(cnt>1) return false;
        }
        return true;
    }
    class Pair {
        String key;
        Integer value;
    
        Pair(String key, Integer value) {
            this.key = key;
            this.value = value;
        }
    }
    public int bfs(String begin, String target){
        Queue<Pair> queue=new LinkedList<>();
        queue.offer(new Pair(begin, 0));

        while(!queue.isEmpty()){
            Pair curr=queue.poll();
            if(curr.key.equals(target)) return curr.value;
            List<String> list=map.get(curr.key);
            if(list==null) continue;
            for(String word:list){
                if(visited.contains(word)){
                    visited.remove(word);
                    queue.offer(new Pair(word, curr.value+1));
                }
            }
        }
        return 0;
    }
}