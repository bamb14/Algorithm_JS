import java.util.*;
class Solution {
    List<int[]> cases = new ArrayList<>();
    boolean[] visited = new boolean[8];
    
    public int solution(int k, int[][] dungeons) {
        int answer = 0;
        Stack<Integer> stack = new Stack<>();
        bt(stack, dungeons.length);
        
        for(int[] order : cases){
            int remain = k;
            int cnt = 0;
            for(int idx : order){
                if(remain >= dungeons[idx][0]){
                    cnt++;
                    remain -= dungeons[idx][1];
                }
                else break;
            }
            answer=Math.max(answer, cnt);
        }
        
        return answer;
    }
    public void bt(Stack<Integer> stack, int len){
        if(stack.size()>=len){
            // cases.add(list.stream().mapToInt(v->v).toArray());
            int[] arr = new int[stack.size()];
            for(int i=0; i<stack.size(); i++){
                arr[i]=stack.get(i);
            }
            cases.add(arr);
            return;
        }
        for(int i=0; i<len; i++){
            if(visited[i] == false){
                visited[i]=true;
                stack.push(i);
                bt(stack, len);
                stack.pop();
                visited[i]=false;
            }
        }
    }
}