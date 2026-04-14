const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const stack=[];
let answer=0;

for(let i=0; i<n; i++){
  if(input[i]!=='0'){
    const [boolean, score, t]=input[i].split(' ').map(Number);
    stack.push([score, t]);
  }
  if(stack.length>0){
    stack[stack.length-1][1]--;
    if(stack[stack.length-1][1]==0){
      answer+=stack[stack.length-1][0];
      stack.pop();
    }
  }
}

console.log(answer);