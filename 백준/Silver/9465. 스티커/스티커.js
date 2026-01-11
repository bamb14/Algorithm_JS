const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const t=Number(input.shift());
let index=0;
const answer=[];
for(let i=0; i<t; i++){
  const n=Number(input[index++]);
  const list=[];
  for(let j=0; j<2; j++){
    list.push(input[index++].split(' ').map(Number));
  }
  const dp=Array.from(Array(2), ()=>Array(n).fill(0));
  
  dp[0][0]=list[0][0];
  dp[1][0]=list[1][0];
  if(n==1){
    answer.push(Math.max(dp[0][0], dp[1][0]));
    continue;
  }
  
  dp[0][1]=list[0][1]+list[1][0];
  dp[1][1]=list[1][1]+list[0][0];
  if(n==2){
    answer.push(Math.max(dp[0][1], dp[1][1]));
    continue;
  }
  
  for(let j=2; j<n; j++){
    dp[0][j]=Math.max(dp[1][j-2], Math.max(dp[0][j-2], dp[1][j-1]))+list[0][j];
    dp[1][j]=Math.max(dp[0][j-2], Math.max(dp[1][j-2], dp[0][j-1]))+list[1][j];
  }
  answer.push(Math.max(dp[0][n-1], dp[1][n-1]));
}

console.log(answer.join('\n'));