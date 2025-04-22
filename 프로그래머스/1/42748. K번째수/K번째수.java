import java.util.*;
class Solution {
    public int[] solution(int[] array, int[][] commands) {
        int[] answer = new int[commands.length];
        for(int i=0; i<commands.length; i++){
            answer[i]=func(array, commands[i]);
        }
        return answer;
    }
    
    public static int func(int[] array, int[] command){
        int[] sliced=Arrays.copyOfRange(array, command[0]-1, command[1]);
        Arrays.sort(sliced);
        return sliced[command[2]-1];
    }
}