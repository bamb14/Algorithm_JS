const fs=require("fs");
const input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
let index=0;
const stack=[];
const answer=[];

for(let i=1; i<=n; i++){
  stack.push(i);
  answer.push('+');
  while(stack.length>0 && stack[stack.length-1]==input[index]){
    stack.pop();
    answer.push('-');
    index++;
  }
}
console.log(stack.length===0? answer.join('\n'):'NO');