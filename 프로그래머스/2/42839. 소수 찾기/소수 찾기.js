function solution(numbers) {
    const list=numbers.split('').sort((a,b)=>a-b);
    let visited=new Array(numbers.length).fill(1);
    let answer = new Set(); // 중복 제거용

    for (let i = 1; i <= list.length; i++) {
        dfs([], i);
    }

    function dfs(current, length) {
        if (current.length === length) {
            const num = Number(current.join(''));
            if (isPrime(num)) {
                answer.add(num);
            }
            return;
        }

        for (let i = 0; i < list.length; i++) {
            if(visited[i]){
                current.push(list[i]);
                visited[i]=0;
                dfs(current, length);
                visited[i]=1;
                current.pop();
            }
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