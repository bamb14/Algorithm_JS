const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const stack=[];
const answer=[];
for(const str of input){
  const cmd=str.split(' ');
  
  if(cmd[0]=='push'){
    stack.push(cmd[1]);
  }
  if(cmd[0]=='pop'){
    if(stack.length>0){
      answer.push(stack[stack.length-1]);
      stack.pop();
    }
    else answer.push(-1);
  }
  if(cmd[0]=='size'){
    answer.push(stack.length);
  }
  if(cmd[0]=='empty'){
    answer.push(stack.length? 0 : 1);
  }
  if(cmd[0]=='top'){
    if(stack.length>0){
      answer.push(stack[stack.length-1]);
    }
    else answer.push(-1);
  }
}

console.log(answer.join('\n'));