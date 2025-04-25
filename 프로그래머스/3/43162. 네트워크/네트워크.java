import java.util.*;
class Solution {
    boolean[] visited=new boolean[200];
    HashMap<Integer, List<Integer>> map=new HashMap<>();
    public int solution(int n, int[][] computers) {
        for(int i=0; i<computers.length; i++){
            int[] computer=computers[i];
            for(int j=0; j<computer.length; j++){
                if(i==j) continue;
                if(computer[j]==1) map.computeIfAbsent(i, value->new ArrayList<>()).add(j);
            }
            // System.out.println(map.get(i));
        }
        
        int answer = 0;
        
        for(int i=0; i<n; i++){
            if(visited[i]==false){
                answer++;
                bfs(i);
            }
        }
        return answer;
    }
    public void bfs(int start){
        Queue<Integer> queue= new LinkedList<>();
        queue.offer(start);
        visited[start]=true;
        while(!queue.isEmpty()){
            int curr=queue.poll();
            List<Integer> connect=map.get(curr);
            if(connect==null) continue;
            for(int n:connect){
                if(visited[n]==false){
                    visited[n]=true;
                    queue.offer(n);
                }
            }
        }
    }
}