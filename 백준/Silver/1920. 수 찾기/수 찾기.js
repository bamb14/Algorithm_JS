const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const N=Number(input[0]);
const list=input[1].split(' ').map(Number);
const M=Number(input[2]);
const numbers=input[3].split(' ').map(Number);

const set=new Set();
for(const n of list) set.add(n);

const answer=[];
for(const n of numbers){
  if(set.has(n)) answer.push(1);
  else answer.push(0);
}

console.log(answer.join('\n'));