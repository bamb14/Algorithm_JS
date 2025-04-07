const fs=require("fs");
let input=fs.readFileSync(0).toString().trim().split('\n');

const N=Number(input[0]);
const cards=input[1].split(' ').map(Number);
const M=Number(input[2]);
const numbers=input[3].split(' ').map(Number);

let answer=[];
let set = new Set();
for(const n of cards){
  if(!set.has(n)){
    set.add(n);
  }
}

for(const n of numbers){
  if(set.has(n)) answer.push(1);
  else answer.push(0);
}

console.log(answer.join(' '));