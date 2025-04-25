import java.util.*;
class Solution {
    HashMap<Integer, List<Integer>> graph=new HashMap<>();
    public int solution(int n, int[][] wires) {
        for(int[] wire : wires){
            graph.computeIfAbsent(wire[0], value->new ArrayList<>()).add(wire[1]);
            graph.computeIfAbsent(wire[1], value->new ArrayList<>()).add(wire[0]);
        }
        int answer = 100;
        for(int[] wire : wires){
            int start=countNode(wire[0], wire[1]);
            int end=countNode(wire[1], wire[0]);
            answer=Math.min(Math.abs(start-end), answer);
        }
        return answer;
    }
    public int countNode(int start, int not){
        int cnt=0;
        Queue<Integer> queue=new LinkedList<>();
        queue.offer(start);
        boolean[] visited=new boolean[101];
        visited[start]=true;
        while(!queue.isEmpty()){
            int curr=queue.poll();
            cnt++;
            List<Integer> list=graph.get(curr);
            for(int node : list){
                if(node==not) continue;
                if(visited[node]==false){
                    visited[node]=true;
                    queue.offer(node);
                }
            }
        }
        return cnt;
    }
}