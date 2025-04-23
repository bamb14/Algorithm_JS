import java.util.*;
class Solution {
    boolean solution(String s) {
        Stack<Character> stack=new Stack<>();
        char[] arr = s.toCharArray();
        
        for(char str:arr){
            if(str==')'){
                if(!stack.isEmpty()&&stack.peek()=='(') stack.pop();
                else stack.push(str);
            }
            else stack.push(str);
        }

        return stack.size()>0? false: true;
    }
}