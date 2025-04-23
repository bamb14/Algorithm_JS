import java.util.*;

class Solution {
    public int solution(int bridge_length, int weight, int[] truck_weights) {
        int answer = 0;
        Queue<int[]> queue = new LinkedList<>(); 
        int total_weight = 0;
        int index = 0;

        while (!queue.isEmpty() || index < truck_weights.length) {
            answer++; // 시간 흐름
            
            // 다리에서 나갈 트럭 제거
            if (!queue.isEmpty()) {
                if (answer >= queue.peek()[1] + bridge_length) {
                    int w = queue.poll()[0];
                    total_weight -= w;
                }
            }

            // 트럭 진입
            if (index < truck_weights.length &&
                total_weight + truck_weights[index] <= weight &&
                queue.size() < bridge_length) {
                total_weight += truck_weights[index];
                queue.offer(new int[]{truck_weights[index], answer});
                index++;
            }
        }

        return answer;
    }
}
