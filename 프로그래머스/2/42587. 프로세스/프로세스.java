import java.util.*;
class Solution {
    public int solution(int[] priorities, int location) {        
        Queue<List<Integer>> queue = new LinkedList<>();
        
        PriorityQueue<Integer> heap = new PriorityQueue<>(Collections.reverseOrder());
        
        for(int i=0; i<priorities.length; i++) {
            Integer n = Integer.valueOf(priorities[i]);
            queue.offer(Arrays.asList(n, i));
            heap.offer(n);
        }
        
        int cnt=0;
        while(!queue.isEmpty()){
            List<Integer> top = queue.poll();
            if(top.get(0) == heap.peek()){
                cnt++;
                heap.poll();
                if(top.get(1) == location) break;
            }
            else queue.offer(top);
        }
        
        return cnt;
    }
}