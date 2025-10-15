const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const str=input[0];
const bomb=input[1];

const stack=[];
stack.push();

for(let i=0; i<str.length; i++){
  if(stack.length===0) stack.push('')
  
  if(str[i]===bomb[0]){
    stack.push('');
  }
  stack[stack.length-1]+=str[i];
  if(stack[stack.length-1]===bomb){
    stack.pop();
  }
}

const answer=stack.join('');
console.log(answer.length>0 ? answer :'FRULA');