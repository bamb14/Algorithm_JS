function solution(numbers, target) {
    let answer = 0;
    const length=numbers.length;
    
    const dfs = (idx,curX) =>{
        if(idx == length && curX == target){
            //numbers 내 모든 수를 돌았고, 타겟 넘버에 맞춤
            answer += 1;
            return
        }
        else if(idx == length && curX != target){
            //numbers 내 모든 수를 돌았지만 타겟넘버에 맞추지 못함
            return;
        }
        //모든 수에 대해 +/- 재귀함수로 돌기
        dfs(idx + 1, curX - numbers[idx]);
        dfs(idx + 1, curX + numbers[idx]);
    }

    dfs(0,0); //재귀함수 시작

    return answer;
}