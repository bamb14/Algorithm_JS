function solution(arr, divisor) {
    const len=arr.length;
    let answer=[];
    for(let i=0; i<len; i++){
        if(arr[i]%divisor===0) answer.push(arr[i]);
    }
    if(answer.length===0) {
        answer.push(-1);
        return answer;
    }
    else return answer.sort((a,b)=>a-b);
}