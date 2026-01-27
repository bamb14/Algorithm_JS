const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const [n, k]=input[0].split(' ').map(Number);
const DIV=1000000000;

const dp=Array.from(Array(n+1), ()=>Array(k+1).fill(1));
for(let i=1; i<=n; i++){
  for(let j=0; j<=k; j++){
    if(j!==0 && j!==1) dp[i][j]=(dp[i-1][j]+dp[i][j-1])%DIV;
  }
}

console.log(dp[n][k]%DIV);