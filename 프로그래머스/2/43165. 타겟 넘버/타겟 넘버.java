class Solution {
    int cnt=0;
    public int solution(int[] numbers, int target) {
        dfs(0, 0, numbers, target);
        return cnt;
    }
    public void dfs(int num, int index, int[] numbers, int target){
        if(index>=numbers.length){
            if(num==target){
                cnt++;
            }
            return;
        }
        
        dfs(num+numbers[index], index+1, numbers, target);
        dfs(num-numbers[index], index+1, numbers, target);
    }
}