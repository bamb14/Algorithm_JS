function solution(s) {
    let left_cnt = 0;

    for (i in s) {
        if (s[i] === '(') {
            left_cnt++;
        } else if (s[i] === ')') {
            left_cnt--;
        }
        if (left_cnt < 0) { 
            return false; // 닫힌 괄호가 열린 괄호보다 먼저 나오는 경우
        }
    }

    return left_cnt === 0; // 모든 괄호가 짝이 맞는 경우
}
