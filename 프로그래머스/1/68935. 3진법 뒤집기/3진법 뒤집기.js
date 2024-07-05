function solution(n) {
    var answer = [];
    let m=0;
    while(n>0){
        m=n%3;
        n=Math.floor(n/3);
        answer.push(m);
    }
    answer.reverse();
    const len=answer.length;
    let result=0;
    let digit=1;
    for(let i=0; i<len; i++){
        result+=answer[i]*digit;
        digit*=3;
    }
    return result;
}