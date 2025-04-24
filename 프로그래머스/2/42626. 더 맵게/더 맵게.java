import java.util.*;
class Solution {
    public int solution(int[] scoville, int K) {
        PriorityQueue<Integer> minHeap=new PriorityQueue<>();
        for(int n: scoville){
            minHeap.offer(n);
        }
        
        int answer = 0;
        while(minHeap.size()>1){
            if(minHeap.peek()>=K) break;
            int sum=minHeap.poll()+minHeap.poll()*2;
            minHeap.offer(sum);
            answer++;
        }
        return minHeap.peek()<K?-1:answer;
    }
}