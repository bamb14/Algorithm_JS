import java.util.*;
class Solution {
    List<int[]> list = new ArrayList<>();
    boolean[] visited;
    
    public int solution(String numbers) {
        visited = new boolean[numbers.length()];
        Set<Integer> set = new HashSet<>();
        Stack<Integer> stack = new Stack<>();
        
        for(int i=1; i<=numbers.length(); i++) bt(stack, i);
        
        for(int [] arr : list){
            String str="";
            for(int idx : arr) str+=numbers.charAt(idx);
            
            set.add(Integer.valueOf(str));
        }

        int answer=0;
        for(int n : set){
            if(isPrime(n)) answer++;
        }
        
        return answer;
    }
    
    public void bt(Stack<Integer> stack, int len){
        if(stack.size()>=len){
            list.add(stack.stream().mapToInt(v->v).toArray());
            return;
        }
        for(int i=0; i<visited.length; i++){
            if(visited[i]==false){
                visited[i]=true;
                stack.push(i);
                bt(stack, len);
                visited[i]=false;
                stack.pop();
            }
        }
    }
    
    public boolean isPrime(int n){
        if(n==0 || n==1) return false;
        
        for(int i=2; i<=Math.sqrt(n); i++){
            if(n%i == 0) return false;
        }
        return true;
    }
}

