const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n=Number(input.shift());
const list=input.map(str=>str.split(' ').map(Number));
const dp=Array.from(Array(n), ()=>Array(3).fill(Infinity));
dp[0]=list[0];

for(let i=1; i<n; i++){
  dp[i][0]=Math.min(dp[i-1][1], dp[i-1][2])+list[i][0];
  dp[i][1]=Math.min(dp[i-1][0], dp[i-1][2])+list[i][1];
  dp[i][2]=Math.min(dp[i-1][1], dp[i-1][0])+list[i][2];
}

console.log(Math.min(...dp[n-1]));