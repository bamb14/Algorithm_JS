function solution(n, times) {
    let total=0;
    let start=0;
    let end= 1000000000 * 100000
   
    while (start <= end) {
        middle = Math.floor((start + end) / 2);

        if (check(middle, n, times)) { // 범위를 더 줄여
            total = middle;
            end = middle - 1; // middle 왼쪽 범위
        } else {
            start = middle + 1; // middle 오른쪽 범위
        }
    }
    return total;
}

function check(curTime, n, times){
    let sum=0;
    
    for (const time of times) {
        sum += Math.floor(curTime / time);
    }

    if (sum < n) { // 주어진 인원수를 충족하지 못하는 경우
        return false;
    }
    
    return true; // 주어진 인원수를 충족하는 경우
}