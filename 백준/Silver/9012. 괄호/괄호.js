const fs=require("fs");
const input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const answer=[];

for(const str of input){
  answer.push(solution(str));
}

console.log(answer.join('\n'));

function solution(str){
  const stack=[];
  
  for(let i=0; i<str.length; i++){
    if(stack.length && stack[stack.length-1]==='(' && str[i]===')'){
      stack.pop();
    }
    else stack.push(str[i]);
  }
  
  return stack.length===0? 'YES':'NO';
}