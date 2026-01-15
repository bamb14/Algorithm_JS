const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n,m]=input.shift().split(' ').map(Number);
const list=input.shift().split(' ').map(Number);
const sum=Array(n+1).fill(0);
for(let i=1; i<=n; i++){
  sum[i]=sum[i-1]+list[i-1];
}

const answer=[];
for(let i=0; i<m; i++){
  const [from, to]=input[i].split(' ').map(Number);
  answer.push(sum[to]-sum[from-1]);
}

console.log(answer.join('\n'));