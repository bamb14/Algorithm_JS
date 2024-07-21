function isPrime(N) {
  // 2부터 N제곱근까지의 수로 N을 나눴을 때
  for (let i = 2; i <= Math.sqrt(N); i++) {
    // 나누어 떨어지는 경우가 한 번이라도 있으면 N은 소수가 아니다.
    if (N % i === 0) return false;
  }
  return true;
}

function solution(nums) {
    let result = [];
    
     nums.forEach((first, i) => {
        nums.slice(i + 1).forEach((second, j) => {
            nums.slice(i + j + 2).forEach((third) => {
                result.push([first, second, third]);
            });
        });
    });
    result=result.map(a=>a.reduce((a,b)=>a+b));
    console.log(result);
    return result.filter(a=>isPrime(a)).length;
}