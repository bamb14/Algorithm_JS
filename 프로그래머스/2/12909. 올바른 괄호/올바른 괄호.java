import java.util.*;
class Solution {
    boolean solution(String s) {
        Stack<Character> stack=new Stack<>();
        // String[] arr = s.split("");
        
        for(int i=0; i<s.length(); i++){
            if(s.charAt(i)==')'){
                if(!stack.isEmpty()&&stack.peek()=='(') stack.pop();
                else stack.push(s.charAt(i));
            }
            else stack.push(s.charAt(i));
        }

        return stack.size()>0? false: true;
    }
}