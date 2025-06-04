const fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');

const fir=input[0];
const sec=input[1];

let dp=Array.from(Array(fir.length+1), ()=>Array(sec.length+1).fill(0));

for(let i=1; i<fir.length+1; i++){
  for(let j=1; j<sec.length+1; j++){
    if(fir[i-1]===sec[j-1]) dp[i][j]=dp[i-1][j-1]+1;
    else dp[i][j]=Math.max(dp[i-1][j], dp[i][j-1]);
  }
}

console.log(dp[fir.length][sec.length]);