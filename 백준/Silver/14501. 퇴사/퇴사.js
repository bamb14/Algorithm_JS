const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const list=input.map(str=>str.split(' ').map(Number));

const dp=new Array(n).fill(0);
if(list[0][0]==1) dp[0]=list[0][1];
if(list[0][0]-1<n) dp[list[0][0]-1]=Math.max(dp[list[0][0]-1], list[0][1]);
for(let i=1; i<n; i++){
  const [time, cost]=list[i];
    
  if(time===1) dp[i]=Math.max(dp[i], dp[i-1]+cost);
  else dp[i]=Math.max(dp[i], dp[i-1]);

  if(i+time-1>=n) continue;
  
  if(time!==1) dp[i+time-1]=Math.max(dp[i+time-1], dp[i-1]+cost);
}
console.log(dp[n-1]);