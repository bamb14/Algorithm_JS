const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n=Number(input[0]);
const list=input[1].split(' ').map((v,i)=>[Number(v),i]);
list.sort((a,b)=>a[0]-b[0]);
const answer=Array(n);
const set=new Set();

for(let i=0; i<n; i++){
  const [n, step]=list[i];
  const len=set.size;
  if(set.has(n)) answer[step]=len-1;
  else answer[step]=len;
  
  if(!set.has(n)) set.add(n);
}

console.log(answer.join(' '));