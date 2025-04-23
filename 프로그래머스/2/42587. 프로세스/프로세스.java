import java.util.*;
class Solution {
    public int solution(int[] priorities, int location) {
        Queue<Integer> queue=new LinkedList<>();
        List<int[]> pq = new ArrayList<>();
        for(int i=0; i<priorities.length; i++){
            queue.offer(i);
            pq.add(new int[]{priorities[i], i});
        }
        pq.sort((a,b)->b[0]-a[0]);
        // System.out.println(pq);
        int answer = 0;
        int index=0;
        while(!queue.isEmpty()){
            int curr = queue.poll();

            if (priorities[curr] < pq.get(index)[0]) {
                queue.offer(curr); // 우선순위가 낮으면 다시 뒤로
            } else {
                answer++;
                if (curr == location) break;
                index++; // 다음 높은 우선순위로
            }
        }
        return answer;
    }
}