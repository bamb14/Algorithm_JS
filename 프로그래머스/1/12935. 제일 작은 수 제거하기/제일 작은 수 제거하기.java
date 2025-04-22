import java.util.*;
class Solution {
    public int[] solution(int[] arr) {
        int min=Integer.MAX_VALUE;
        int index=-1;
        
        for(int i=0; i<arr.length; i++){
            if(arr[i]<min){
                min=arr[i];
                index=i;
            }
        }
        int[] list= new int[arr.length-1];
        int idx = 0;
        for (int num : arr) {
            if (num != min) list[idx++] = num;
        }
        return list.length==0? new int[]{-1} : list;
    }
}