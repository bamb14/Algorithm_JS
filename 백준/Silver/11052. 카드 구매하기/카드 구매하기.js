const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const list=input[0].split(' ').map(Number);

const dp=Array(n+1).fill(0);

for(let i=1; i<=n; i++){
  dp[i]=Math.max(dp[i], list[i-1]);
  for(let j=i+1; j<=n; j++){
    dp[j]=Math.max(dp[j], dp[j-i]+list[i-1]);
  }
}
console.log(dp[n]);