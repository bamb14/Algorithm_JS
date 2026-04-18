const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a,b]=input[0].split(' ').map(BigInt);

const result = solution(b) - solution(a - 1n);
console.log(result.toString());

function solution(x) {
  if (x <= 0n) return 0n;

  // 1. 가장 큰 2^k 찾기
  let k = 0n;
  let p = 1n;
  while ((p << 1n) <= x) {
    p <<= 1n;
    k++;
  }

  let res = 0n;

  // 2. 0 ~ (2^k - 1) 까지의 1 개수
  // k * 2^(k-1)
  if (k > 0n) {
    res += k * (p >> 1n);
  }

  // 3. MSB 기여 (2^k ~ x)
  res += (x - p + 1n);

  // 4. 나머지 재귀
  res += solution(x - p);

  return res;
}