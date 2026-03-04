const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const list=input[1].split(' ').map(Number);

const dp=Array(n).fill(0);
const reverseDp=Array(n).fill(0);

for(let i=0; i<n; i++){
  dp[i]=1;
  for(let j=0; j<i; j++){
    if(list[i]>list[j] && dp[j]+1>dp[i]){
      dp[i]=dp[j]+1;
    }
  }
}

for(let i=n-1; i>=0; i--){
  reverseDp[i]=1;
  for(let j=n-1; j>i; j--){
    if(list[i]>list[j] && reverseDp[j]+1>reverseDp[i]){
      reverseDp[i]=reverseDp[j]+1;
    }
  }
}

let answer=0;
for(let i=0; i<n; i++){
  answer=Math.max(answer, dp[i]+reverseDp[i]);
}

console.log(answer-1);