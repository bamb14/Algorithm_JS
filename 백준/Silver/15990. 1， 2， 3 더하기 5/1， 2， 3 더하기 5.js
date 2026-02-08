const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const N=Number(input.shift());
const DIV=1000000009;

const list=input.map(Number);
const target=Math.max(...list);
const dp=Array.from(Array(target+1), ()=>Array(4).fill(0));
dp[1][1]=1;
dp[2][2]=1;
dp[3][1]=1;
dp[3][2]=1;
dp[3][3]=1;

const answer=[];
for(let i=4; i<=target; i++){
  dp[i][1]=(dp[i-1][2]+dp[i-1][3])%DIV;
  dp[i][2]=(dp[i-2][1]+dp[i-2][3])%DIV;
  dp[i][3]=(dp[i-3][1]+dp[i-3][2])%DIV;
}

for(const n of list){
  answer.push(dp[n].reduce((a,b)=>a+b,0)%DIV);
}

console.log(answer.join('\n'));