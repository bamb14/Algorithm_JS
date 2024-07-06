function solution(numbers) {
    var answer = [];
    const len=numbers.length;
    for(let i=0; i<len-1; i++){
        for(let j=i+1; j<len; j++){
            const sum=numbers[i]+numbers[j];
            if(!answer.includes(sum)) answer.push(sum);
        }
    }
    return answer.sort((a,b)=>a-b);
}