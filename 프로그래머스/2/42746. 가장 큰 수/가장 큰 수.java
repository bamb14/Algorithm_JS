import java.util.*;
class Solution {
    public String solution(int[] numbers) {
        String answer = "";
        PriorityQueue<String> pq= new PriorityQueue<>(
            (a, b) -> (b + a).compareTo(a + b) // 큰 숫자가 먼저 오도록 내림차순 정렬
        );
        for(int n : numbers){
            pq.add(Integer.toString(n));
        }
        // System.out.print(pq);
        while (!pq.isEmpty()) {
            answer+=pq.poll();
        }
        if(answer.charAt(0)=='0') return "0";

        return answer;
    }
}