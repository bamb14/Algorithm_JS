const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let [n,d] = input.shift().split(' ').map(Number);
let info=input.map(str=>str.split(' ').map(Number));
info.sort((a,b)=>a[1]-b[1]);

let dp=new Array(d+1).fill(Infinity);
dp[0]=0;
let index=0;

for(let i=1; i<=d; i++){
  if(index<n && info[index][1]<=i){
    while(index<n && info[index][1]<=i){
      dp[i]=Math.min(Math.min(dp[i-1]+1,dp[i]), dp[info[index][0]] + info[index][2]);

      index++;
    }
  }
  else dp[i]=dp[i-1]+1;
}

console.log(dp[d]);