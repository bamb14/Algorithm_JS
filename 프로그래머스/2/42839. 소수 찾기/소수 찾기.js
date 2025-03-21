function solution(numbers) {
    const list=numbers.split('').sort((a,b)=>a-b);
    let answer = new Set(); // 중복 제거용

    for (let i = 1; i <= list.length; i++) {
        dfs('', list, i);
    }

    function dfs(current, remaining, length) {
        if (current.length === length) {
            const num = Number(current);
            if (isPrime(num)) {
                answer.add(num);
            }
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            const newCurrent = current + remaining[i];
            const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
            dfs(newCurrent, newRemaining, length);
        }
    }
    
    return answer.size;
}

function isPrime(n){
    if(n<=1) return false;
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i===0) return false;
    }
    return true;
}