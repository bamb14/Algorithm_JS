const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const list=input.map(str=>str.split(' ').map(Number));
list.sort((a,b)=>a[0]-b[0]);
const dp=Array(n).fill(0);

for(let i=0; i<n; i++){
  dp[i]=1;
  for(let j=0; j<i; j++){
    if(list[j][0]<list[i][0] && list[j][1]<list[i][1] && dp[j]+1>dp[i]){
      dp[i]=dp[j]+1;
    }
  }
}

console.log(n-Math.max(...dp));