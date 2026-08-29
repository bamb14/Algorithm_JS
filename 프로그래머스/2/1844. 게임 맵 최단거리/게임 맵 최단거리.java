import java.util.*;
class Solution {
    public int solution(int[][] maps) {
        int n = maps.length;
        int m = maps[0].length;
        
        boolean[][] visited= new boolean[n][m];
        Queue<int[]> queue = new LinkedList<>();
        queue.offer(new int[]{0,0,1});
        visited[0][0]=true;
        
        int[][] moves =  {{-1,0},{0,-1},{1,0},{0,1}};
        
        while(!queue.isEmpty()){
            int[] arr = queue.poll();
            
            if(arr[0]==n-1 && arr[1]==m-1){
                return arr[2];
            }
            
            for(int[] move : moves){
                int dx=arr[0]+move[0];
                int dy=arr[1]+move[1];
                
                if(dx<0 || dy<0 || dx>=n || dy>=m) continue;
                if(maps[dx][dy]==0) continue;
                
                if(visited[dx][dy]==false){
                    visited[dx][dy]=true;
                    queue.offer(new int[]{dx,dy,arr[2]+1});
                }
            }
        }
        
        return -1;
    }
}