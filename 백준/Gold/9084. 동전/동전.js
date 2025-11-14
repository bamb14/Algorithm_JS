const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const T=Number(input.shift());
const answer=[];
for(let i=0; i<T; i++){
  const n=Number(input[i*3]);
  const coins=input[i*3+1].split(' ').map(Number);
  const target=Number(input[i*3+2]);
  
  answer.push(solution(n, coins, target));
}
console.log(answer.join('\n'));

function solution(n, coins, target){
  const dp=new Array(target+1).fill(0);
  dp[0]=1;
  
  for (const coin of coins) {
    for (let s = 0; s <= target-coin; s++) { 
      dp[s + coin] += dp[s];
    }
  }
  
  return dp[target];
}