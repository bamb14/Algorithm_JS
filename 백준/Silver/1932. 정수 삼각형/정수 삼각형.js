const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n=Number(input.shift());
const list=input.map(str=>str.split(' ').map(Number));

const dp=Array.from(Array(n), ()=>Array(n).fill(0));
dp[0][0]=list[0][0];

for(let i=1; i<n; i++){
  dp[i][0]=dp[i-1][0]+list[i][0];
  for(let j=1; j<=i; j++){
    dp[i][j]=Math.max(dp[i-1][j-1], dp[i-1][j])+list[i][j];
  }
  dp[i][i]=dp[i-1][i-1]+list[i][i];
}

console.log(Math.max(...dp[n-1]));