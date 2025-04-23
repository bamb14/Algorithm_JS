import java.util.*;

class Solution {
    public int[] solution(int[] progresses, int[] speeds) {
        Queue<Integer> queue = new LinkedList<>();
        Queue<Integer> speedQueue = new LinkedList<>();
        
        for (int n : progresses) queue.offer(n);
        for (int n : speeds) speedQueue.offer(n);

        List<Integer> answer = new ArrayList<>();

        while (!queue.isEmpty()) {
            // 하루 진행
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                int work = queue.poll();
                int speed = speedQueue.poll();
                queue.offer(work + speed);
                speedQueue.offer(speed);
            }

            // 배포 가능한 기능 세기
            int count = 0;
            while (!queue.isEmpty() && queue.peek() >= 100) {
                queue.poll();
                speedQueue.poll();
                count++;
            }

            if (count > 0) answer.add(count);
        }

        return answer.stream().mapToInt(i -> i).toArray();
    }
}
