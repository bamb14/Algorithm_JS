import java.util.*;
class Solution {
    public int solution(int[][] maps) {
        int n = maps.length;
        int m = maps[0].length;
        int min=Integer.MAX_VALUE;
        Queue<int[]> queue = new LinkedList<>();
        queue.offer(new int[]{0,0,0});
        boolean[][] visited= new boolean[n][m];
        int[][] moves =  {{-1,0},{0,-1},{1,0},{0,1}};
        
        while(!queue.isEmpty()){
            int[] arr = queue.poll();
            arr[2]++;
            
            if(arr[0]==n-1 && arr[1]==m-1){
                min=Math.min(min, arr[2]);
                continue;
            }
            
            for(int[] move : moves){
                int dx=arr[0]+move[0];
                int dy=arr[1]+move[1];
                
                if(dx<0 || dy<0 || dx>=n || dy>=m) continue;
                if(maps[dx][dy]==0) continue;
                
                if(visited[dx][dy]==false){
                    visited[dx][dy]=true;
                    queue.offer(new int[]{dx,dy,arr[2]});
                }
            }
        }
        
        if(min==Integer.MAX_VALUE) return -1;
        return min;
    }
}