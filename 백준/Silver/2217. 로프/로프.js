const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const list=input.map(Number).sort((a,b)=>a-b);

let answer=0;

for(let i=0; i<n; i++){
  answer=Math.max(answer, list[i]*(n-i));
}

console.log(answer);