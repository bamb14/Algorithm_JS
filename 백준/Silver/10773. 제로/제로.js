const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const list=input.map(Number);
const stack=[];

for(let i=0; i<n; i++){
  if(list[i]!==0) stack.push(list[i]);
  else stack.pop();
}

console.log(stack.reduce((a,b)=>a+b,0));