const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n=Number(input.shift());
const list=input[0].split(' ').map(Number);

const dp=new Array(n).fill(0);
dp[0]=list[0];

for(let i=1; i<n; i++){
  dp[i]=Math.max(dp[i-1]+list[i], list[i]);
}

console.log(Math.max(...dp));