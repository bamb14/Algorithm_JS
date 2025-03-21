function solution(numbers, target) {
    let count=0;
    let length=numbers.length;
    
    dfs(0,-1);
    function dfs(num, index){
        if(index===length-1){
            if(num===target) count++;
            return;
        }
        else{
            dfs(num+numbers[index+1], index+1);
            dfs(num-numbers[index+1], index+1);
        }
    }
    return count;
}