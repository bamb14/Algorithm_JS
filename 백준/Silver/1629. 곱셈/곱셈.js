const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [a,b,c]=input[0].split(' ').map(BigInt);

function calculate(b){
  if (b === 0n) return 1n;
  if (b === 1n) return a % c;

  const half = calculate(b/2n);
  const sq = (half * half) % c;

  if (b%2n === 0n) return sq; // b가 짝수
  return (sq * (a % c)) % c; // b가 홀수 (a%c 를 한번 더 곱함)
}

console.log(String(calculate(b)));