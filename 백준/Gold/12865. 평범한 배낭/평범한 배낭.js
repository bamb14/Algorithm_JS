const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let [n,k] = input.shift().split(' ').map(Number);
let list=input.map(str=>str.split(' ').map(Number)).sort((a,b)=>a[0]-b[0]);

let dp=Array.from(Array(n), ()=>Array(k+1).fill(0));
// dp[i][j]: i번째 물건을 넣거나 넣지 않았을때
// 무게 k에 담을 수 있는 최대 가치

for(let j=1; j<=k; j++){
  if(list[0][0]>j) continue;
  else dp[0][j]=list[0][1];
}
let answer=0;

for(let i=1; i<n; i++){
  let [w, v]=list[i];
  for(let j=1; j<=k; j++){
    if(w>j) dp[i][j]=dp[i-1][j];
    else {
      dp[i][j]=Math.max(dp[i-1][j], dp[i-1][j-w]+v);
    }
  }
}
console.log(dp[n-1][k]);