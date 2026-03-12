const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const t=Number(input.shift());
let index=0;

for(let i=0; i<t; i++){
  const [n,k]=input[index++].split(' ').map(Number);
  const timeList=input[index++].split(' ').map(Number);
  const link=Array.from(Array(n+1), ()=>[]);
  const cnt=Array(n+1).fill(0);
  
  for(let i=0; i<k; i++){
    const [from, to]=input[index++].split(' ').map(Number);
    link[from].push(to);
    cnt[to]++;
  }
  
  const w=Number(input[index++]);
  
  const dp=Array(n+1).fill(0);
  const queue=[];
  
  for(let i=1; i<=n; i++){
    if(cnt[i]==0){
      queue.push(i);
      dp[i]=timeList[i-1];
    }
  }
  
  while(queue.length){
    const curr=queue.shift();
    
    for(const next of link[curr]){
      dp[next]= Math.max(dp[next], dp[curr]+timeList[next-1]);
      
      cnt[next]--;
      
      if(cnt[next]==0) queue.push(next);
    }
  }
  
  console.log(dp[w]);
}