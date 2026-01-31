const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const dp=Array.from(Array(10), ()=>Array(n).fill(0));

for(let i=0; i<=9; i++) dp[i][1]=1;
for(let i=1; i<=n; i++) dp[0][i]=1;

for(let j=1; j<=9; j++){
  for(let i=2; i<=n; i++){
    dp[j][i]=(dp[j][i-1]+dp[j-1][i])%10007;
  }
}

let answer=0;
for(let i=0; i<=9; i++){
  answer+=dp[i][n]%10007;
}

console.log(answer%10007);