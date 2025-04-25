import java.util.*;
class Solution {
    List<int[]> allCase=new ArrayList<>();
    boolean[] visited=new boolean[8];
    public int solution(int k, int[][] dungeons) {
        List<Integer> list=new ArrayList<>();
        bt(list, dungeons.length);
        
        int answer = -1;
        
        for(int[] order : allCase){
            int remain=k;
            int cnt=0;
            for(int i=0; i<order.length; i++){
                int index=order[i];
                if(remain>=dungeons[index][0]){
                    remain-=dungeons[index][1];
                    cnt++;
                }else break;
            }
            if(answer<cnt) answer=cnt;
        }
        
        return answer;
    }
    public void bt(List<Integer> list, int len){
        if(list.size()==len){
            allCase.add(list.stream().mapToInt(i->i).toArray());
            return;
        }
        for(int i=0; i<len; i++){
            if(visited[i]==false){
                visited[i]=true;
                list.add(i);
                bt(list, len);
                list.remove(list.size()-1);
                visited[i]=false;
            }
        }
    }
}