// function solution(left, right) {
//     let answer=0;
//     for(let i=left; i<=right; i++){
//         let num=2;
//         for(let j=2; j<i; j++){
//             if(i%j===0) num++;
//         }
//         if(num%2===0) answer+=i;
//         else answer-=i;
//     }
//     return answer;
// }
function solution(left, right) {
    let answer = 0;

    for (let i = left; i <= right; i++) {
        // 제곱수인지 확인
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i; // 제곱수일 경우 약수의 개수가 홀수
        } else {
            answer += i; // 제곱수가 아닌 경우 약수의 개수가 짝수
        }
    }

    return answer;
}
