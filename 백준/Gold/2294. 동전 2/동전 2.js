const fs=require("fs");
let input=fs.readFileSync(0).toString().trim().split('\n');

const [n,k]=input.shift().split(' ').map(Number);
const coin=input.map(Number).sort((a,b)=>a-b);

const dp= new Array(k+1).fill(Infinity);
dp[0]=0;

for(let i=0; i<n; i++){
  for(let j=coin[i]; j<k+1; j++){
    dp[j] = Math.min(dp[j], 1+dp[j - coin[i]]);
  }
}
console.log(dp[k]===Infinity? -1: dp[k]);