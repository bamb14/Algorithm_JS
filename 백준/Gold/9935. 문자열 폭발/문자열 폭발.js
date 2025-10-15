const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const str=input[0];
const bomb=input[1];
const len=bomb.length;

const stack=[];

for(const ch of str){
  stack.push(ch);
  
  if(stack.length>=len && stack[stack.length-1]===bomb[len-1]){
    let flag=true;
    for(let i=0; i<len; i++){
      if(stack[stack.length-len+i] !== bomb[i]){
        flag=false;
        break;
      }
    }
    if(flag){
      for(let i=0; i<len; i++) stack.pop();
    }
  }
}

console.log(stack.length>0 ? stack.join(''):'FRULA');