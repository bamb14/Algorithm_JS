function solution(numbers, target) {
    let answer = 0;

    const dfs = (numbers,idx,curX) =>{
        if(idx == numbers.length && curX == target){ //numbers 내 모든 수를 돌았고, 타겟 넘버에 맞춤
            answer += 1;
            return
        }
        else if(idx == numbers.length && curX != target){ //numbers 내 모든 수를 돌았지만 타겟넘버에 맞추지 못함
            return;
        }
        //모든 수에 대해 +/- 재귀함수로 돌기
        dfs(numbers, idx + 1, curX - numbers[idx])
        dfs(numbers, idx + 1, curX + numbers[idx]);
    }

    dfs(numbers,0,0); //재귀함수 시작

    return answer;
}