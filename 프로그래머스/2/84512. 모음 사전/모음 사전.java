import java.util.*;
class Solution {
    String[] vowel=new String[]{"A","E","I","O","U"};
    List<String> dict=new ArrayList<>();
    public int solution(String word) {
        StringBuilder sb = new StringBuilder();
        
        for(int i=1; i<=5; i++){
            bt(i, sb);
        }
        dict.sort((a,b)->a.compareTo(b));
        // System.out.print(dict);
        int answer = dict.indexOf(word)+1;
        return answer;
    }
    public void bt(int len, StringBuilder sb){
        if(sb.length()==len){
            dict.add(sb.toString());
            return;
        }
        for(int i=0; i<5; i++){
            sb.append(vowel[i]);
            bt(len, sb);
            sb.deleteCharAt(sb.length()-1);
        }
    }
}