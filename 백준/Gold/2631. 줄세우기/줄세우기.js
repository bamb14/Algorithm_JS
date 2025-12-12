const fs=require("fs");
const input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const list=input.map(Number);

// i번재 인덱스까지 LIS 길이
const dp=Array(n).fill(1);

for(let i=0; i<n; i++){
  for(let j=0; j<i; j++){
    if(list[i]>list[j] && dp[j]+1>dp[i]){
      dp[i]=dp[j]+1;
    }
  }
}

const max=Math.max(...dp);
console.log(n-max);