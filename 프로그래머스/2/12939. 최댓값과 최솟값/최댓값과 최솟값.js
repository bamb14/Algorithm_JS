function solution(s) {
    let numbers=s.split(' ');
    let max=Math.max(...numbers);
    let min=Math.min(...numbers);
    var answer = String(min)+' '+String(max);
    return answer;
}