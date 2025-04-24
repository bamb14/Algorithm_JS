import java.util.*;
class Solution {
    public int[] solution(String[] operations) {
        PriorityQueue<Integer> minHeap=new PriorityQueue<>();
        PriorityQueue<Integer> maxHeap=new PriorityQueue<>(Collections.reverseOrder());
        for(String op:operations){
            String[] arr=op.split(" ");
            if(arr[0].equals("I")){
                minHeap.offer(Integer.parseInt(arr[1]));
                maxHeap.offer(Integer.parseInt(arr[1]));
            }
            else{
                if(minHeap.isEmpty()) continue;
                
                if(arr[1].charAt(0)=='-'){
                    int min=minHeap.poll();
                    maxHeap.remove(min);
                }
                else{
                    int max=maxHeap.poll();
                    minHeap.remove(max);
                }
            }
        }
        if(minHeap.isEmpty()) return new int[]{0,0};
        return new int[]{maxHeap.peek(),minHeap.peek()};
    }
}