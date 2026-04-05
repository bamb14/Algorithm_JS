const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const before=input.slice(0, n);
const after=input.slice(n,);
const visited=new Set();

let curr=0;
let answer=0;
for(let i=0; i<n; i++){
  while(curr < n && visited.has(before[curr])) curr++;
  
  if(before[curr] == after[i]){
    curr++;
  } else {
    visited.add(after[i]);
    answer++;
  }
}

console.log(answer);