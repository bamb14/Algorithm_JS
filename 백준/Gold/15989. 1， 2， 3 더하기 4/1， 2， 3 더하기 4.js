const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let n=Number(input.shift());
const nums = input.map(Number);
const max = Math.max(...nums);

let dp=new Array(10001).fill(0);
dp[0]=1;

for (const num of [1, 2, 3]) {
  for (let i = num; i <= max; i++) {
    dp[i] += dp[i - num];
  }
}

const answer = nums.map(n => dp[n]);
console.log(answer.join('\n'));