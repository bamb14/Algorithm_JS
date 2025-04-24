import java.util.*;
class Solution {
    public int solution(int[][] jobs) {
        Arrays.sort(jobs, (a,b)->a[0]-b[0]);
        PriorityQueue<int[]> queue= new PriorityQueue<>((a,b)->a[1]-b[1]);
        int index=0;
        int time=0;
        int[] current=new int[]{0,0};
        List<Integer> times=new ArrayList<>();
        while(times.size()<jobs.length){
            while(index<jobs.length && jobs[index][0]<=time){
                queue.offer(jobs[index++]);
            }
            if(!queue.isEmpty()){
                current=queue.poll();

                time+=current[1];
                times.add(time-current[0]);
            }else time++;
            
        }
        int answer=0;
        for(int i=0; i<times.size(); i++){
            System.out.println(times.get(i));
            answer+=times.get(i);
        }
        return answer/times.size();
    }
}