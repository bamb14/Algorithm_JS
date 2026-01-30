const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const[n, m]=input.shift().split(' ').map(Number);
const map=input.map(str=>str.split(' ').map(Number));

const dp=Array.from(Array(n), ()=>Array(m));
dp[0][0]=map[0][0];
for(let i=1; i<m; i++){
  dp[0][i]=dp[0][i-1]+map[0][i];
}

for(let j=1; j<n; j++){
  dp[j][0]=dp[j-1][0]+map[j][0];
}

for(let i=1; i<n; i++){
  for(let j=1; j<m; j++){
    dp[i][j]=Math.max(dp[i-1][j], dp[i][j-1])+map[i][j];
  }
}

console.log(dp[n-1][m-1]);