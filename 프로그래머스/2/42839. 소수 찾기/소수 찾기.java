import java.util.*;
class Solution {
    Set<Integer> set = new HashSet<>();
    boolean[] visited;
    
    public int solution(String numbers) {
        visited = new boolean[numbers.length()];
        
        Stack<Integer> stack = new Stack<>();
        
        for(int i=1; i<=numbers.length(); i++) bt(stack, i, numbers);

        int answer=0;
        for(int n : set){
            if(isPrime(n)) answer++;
        }
        
        return answer;
    }
    
    public void bt(Stack<Integer> stack, int len, String numbers){
        if(stack.size()>=len){
            String str="";
            for(int idx : stack){
                str+=numbers.charAt(idx);
            }
            set.add(Integer.valueOf(str));
            return;
        }
        for(int i=0; i<visited.length; i++){
            if(visited[i]==false){
                visited[i]=true;
                stack.push(i);
                bt(stack, len, numbers);
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

