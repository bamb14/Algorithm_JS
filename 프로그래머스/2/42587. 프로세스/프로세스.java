import java.util.*;
class Solution {
    public int solution(int[] priorities, int location) {
        Queue<Integer> queue=new LinkedList<>();
        PriorityQueue<Integer> priority=new PriorityQueue<>((a,b)->b-a);
        for(int i=0; i<priorities.length; i++){
            queue.offer(i);
            priority.offer(priorities[i]);
        }
        int answer=0;
        while(!queue.isEmpty()){
            int curr=queue.poll();
            if(priorities[curr]<priority.peek()) queue.offer(curr);
            else{
                priority.poll();
                answer++;
                if(curr==location) return answer;
            }
        }
        
        return -1;
    }
}