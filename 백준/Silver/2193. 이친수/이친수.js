const fs = require("fs");

let a = fs.readFileSync(0).toString().trim();

let bitInt = BigInt(a);

let list = [];
list[1] = 1n;
list[2] = 1n;

function solution_dfs(n) {
  for (let i = 3; i <= n; i++) {
    list[i] = list[i - 1] + list[i - 2];
  }
  console.log(list[n].toString());
}

solution_dfs(bitInt);
