const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const t = Number(input.shift());
let idx=0;
const answer=[];
for(let i=0; i<t; i++){
  const [n,m]=input[idx++].split(' ').map(Number);
  idx+=m;
  answer.push(n-1);
}

console.log(answer.join('\n'));