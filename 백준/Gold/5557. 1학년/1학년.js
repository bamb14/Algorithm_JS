const fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numebrs=input[1].split(' ').map(Number);

const target=numebrs[n-1];
const list=numebrs.splice(0, n-1);

let answer=0;

const dp=Array.from(Array(n), ()=>Array(21).fill(0n));
// dp[i][j]
// i번째 인덱스까지 계산했을 때 값이 j가 되는 경우의 수 

dp[0][list[0]]=1n;

for (let i = 1; i <=n-2; i++) {
  for (let j = 0; j <= 20; j++) {
    if (dp[i - 1][j]) {
      const plus = j + list[i];
      const minus = j - list[i];
      if (plus <= 20) dp[i][plus] += dp[i - 1][j];
      if (minus >= 0) dp[i][minus] += dp[i - 1][j];
    }
  }
}

console.log(dp[n-2][target].toString());