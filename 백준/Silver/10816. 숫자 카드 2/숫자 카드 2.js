const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input[0]);
const cards=input[1].split(' ').map(Number);
const m=Number(input[2]);
const list=input[3].split(' ').map(Number);

const map=new Map();

for(let num of cards){
  if(map.has(num)) map.set(num, map.get(num)+1);
  else map.set(num, 1);
}

const answer=[];

for(let num of list){
  if(map.has(num)) answer.push(map.get(num));
  else answer.push(0);
}

console.log(answer.join(' '));