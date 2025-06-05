const fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input[0]);
const list=input[1].split(' ').map(Number);

let dp=new Array(n).fill(1);

for(let i=1; i<n; i++){
  for(let j=0; j<i; j++){
    if(list[j]<list[i]){
      dp[i] = Math.max(dp[i], dp[j] + 1)
    }
  }
}

console.log(Math.max(...dp));