const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const list=input.map(str=>str.split(' ').map(Number));
const MAX_N=Math.max(...list.map(v=>v[0]));
const MAX_M=Math.max(...list.map(v=>v[1]));
const dp=Array.from(Array(MAX_N+1), ()=>Array(MAX_M+1).fill(0));

for(let i=1; i<=MAX_M; i++) dp[1][i]=dp[1][i-1]+1;

for(let i=2; i<=MAX_N; i++){
  for(let j=i; j<=MAX_M; j++){
    if(i==j) dp[i][j]=1;
    else dp[i][j]=dp[i][j-1]+dp[i-1][j-1];
  }
}

for(const [n,m] of list){
  console.log(dp[n][m]);
}