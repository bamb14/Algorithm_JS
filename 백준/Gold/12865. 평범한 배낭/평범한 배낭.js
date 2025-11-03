const fs=require("fs");
const input=fs.readFileSync(0).toString().trim().split('\n');

const [n,k]=input.shift().split(' ').map(Number);
const list=input.map(str=>str.split(' ').map(Number));
list.sort((a,b)=>a[0]-b[0]);

const dp=Array.from(Array(n), ()=>Array(k+1).fill(0));

for(let i=list[0][0]; i<=k; i++){
  dp[0][i]=list[0][1];
}

for(let i=1; i<n; i++){
  const [w,v]=list[i];
  for(let j=0; j<=k; j++){
    if(j-w<0) dp[i][j]=dp[i-1][j];
    else dp[i][j]=Math.max(dp[i-1][j], dp[i-1][j-w]+v);
  }
}

console.log(dp[n-1][k]);