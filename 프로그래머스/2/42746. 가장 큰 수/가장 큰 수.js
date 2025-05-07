function solution(numbers) {
    numbers.sort((a,b)=> (String(b)+String(a))-(String(a)+String(b)));
    var answer = numbers.join('');
    return Number(answer)===0 ? "0" : answer;
}