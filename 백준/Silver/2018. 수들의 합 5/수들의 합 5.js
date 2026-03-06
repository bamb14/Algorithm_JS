const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());

let answer=1;

let left=1, right=2;
let sum=1;
while(left<right && right<=n){
  if(sum>=n){
    if(sum==n) answer++;
    sum-=left++;
  }
  else sum+=right++;
}

console.log(answer);