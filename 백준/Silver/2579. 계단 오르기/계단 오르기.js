const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input.shift());
const list = input.map(Number);

const solution = (n) => {
  if (n === 1) return list[0];
  if (n === 2) return list[0] + list[1];

  let dp = new Array(n).fill(0);
  dp[0] = list[0];
  dp[1] = list[0] + list[1];
  dp[2] = Math.max(list[0] + list[2], list[1] + list[2]);

  for (let i = 3; i < n; i++) {
    dp[i] = Math.max(dp[i - 3] + list[i - 1] + list[i], dp[i - 2] + list[i]);
  }

  return dp[n - 1];
};

console.log(solution(n));
