const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const list=input.map(Number);

const stack=[0];
let max=0;

for(let i=1; i<n; i++){
  const curr=list[i];
  if(list[stack[stack.length-1]]<=curr){
    stack.push(i);
    continue;
  }
    
  while(list[stack[stack.length-1]]>curr){
    const heightIndex=stack[stack.length-1];
    stack.pop();
    const width=stack.length==0? i: i-stack[stack.length-1]-1;
    const total=width * list[heightIndex];
    max=Math.max(max, total);
    
  }
  stack.push(i);
}

while(stack.length>0){
  const heightIndex=stack[stack.length-1];
  stack.pop();
  const width=stack.length==0? n:n-stack[stack.length-1]-1;
  const total=width * list[heightIndex];
  max=Math.max(max, total);
}

console.log(max);