function solution(prices) {
    const answer=Array(prices.length).fill(0);
    
    for(let i=0; i<prices.length-1; i++){
        const curr=prices[i];
        let cnt=0;
        for(let j=i+1; j<prices.length;  j++){
            cnt++;
            if(curr>prices[j]) break;
        }
        answer[i]=cnt;
    }
    return answer;
}