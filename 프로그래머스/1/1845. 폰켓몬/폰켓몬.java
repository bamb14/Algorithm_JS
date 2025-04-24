import java.util.*;

class Solution {
    public int solution(int[] nums) {
        HashSet<Integer> set= new HashSet<>();
        for(int n: nums){
            set.add(n);
        }
        
        if(set.size()<nums.length/2) return set.size();
        else return nums.length/2;
    }
}