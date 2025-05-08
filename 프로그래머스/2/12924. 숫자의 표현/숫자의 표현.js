function solution(n) {
    let result=1;

    for(let i=1; i<=~~(n/2)+1; i++){
        let sum=i;
        for(let j=i+1; j<=Math.floor(n/2)+1; j++){
            sum+=j;
            if(sum>=n){
                if(sum===n) result++;
                break;
            }
        }
    }
    return result;
}