import java.util.*;
class Solution {
    List<String> comb =new ArrayList<>();
    boolean[] visited= new boolean[8];
    public int solution(String numbers) {
        String[] cards=numbers.split("");
        
        for(int i=1; i<=cards.length; i++){
            StringBuilder sb=new StringBuilder();
            bt(i,sb, cards);
        }
        System.out.println(comb);
        HashSet<Integer> set=new HashSet<>();
        for(String str : comb){
            set.add(Integer.parseInt(str));
        }
        
        int answer = 0;
        for(int n:set){
            System.out.println(n);
            if(isPrime(n)) answer++;
        }
        
        return answer;
    }
    
    public void bt(int len, StringBuilder sb, String[] cards){
        if(sb.length()==len){
            comb.add(sb.toString());
            return;
        }
        for(int i=0; i<cards.length; i++){
            if(visited[i]==false){
                sb.append(cards[i]);
                visited[i]=true;
                
                bt(len,sb,cards);
                
                visited[i]=false;
                sb.deleteCharAt(sb.length() - 1);
            }
        }
    }
    
    public static boolean isPrime(int n){
        if(n<=1) return false;
        for(int i=2; i<=Math.sqrt(n); i++){
            if(n%i==0) return false;
        }
        return true;
    }
}

