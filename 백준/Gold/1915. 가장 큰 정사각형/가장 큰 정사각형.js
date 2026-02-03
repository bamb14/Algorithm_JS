const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const [n, m]=input.shift().split(' ').map(Number);
const map=input.map(str=>str.split('').map(Number));

const dp=Array.from(Array(n), ()=>Array(m).fill(0));
let maxLen = 0;

for(let i=0; i<n; i++){
  for(let j=0; j<m; j++){
    if(map[i][j]==1) {
      if(i==0 || j==0) dp[i][j] = 1;
      else dp[i][j]=Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])+1;
    }
    if(dp[i][j]>maxLen) maxLen=dp[i][j];
  }
}

console.log(maxLen**2);