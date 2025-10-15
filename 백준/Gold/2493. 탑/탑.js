const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const list=input[0].split(' ').map(Number);

const answer=[0];
const stack=[[0,list[0]]];

for(let i=1; i<n; i++){
  let flag=false;
  while(stack.length>0){
    if(stack[stack.length-1][1]<list[i]){
      stack.pop();
    }
    else {
      flag=true;
      answer.push(stack[stack.length-1][0]+1);
      break;
    }
  }
  if(!flag) answer.push(0);
  stack.push([i, list[i]]);
}

console.log(answer.join(' '));