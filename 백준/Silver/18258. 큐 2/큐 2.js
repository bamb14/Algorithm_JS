const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const list=input;
const queue=[];
const answer=[];

let index=0;
for(const command of list){
  const splited=command.split(' ');
  if(splited[0]==='push') queue.push(splited[1]);
  else if(splited[0]==='pop') {
    if(queue.length-index===0) answer.push(-1);
    else answer.push(queue[index++]);
  }
  else if(splited[0]==='size') answer.push(queue.length-index);
  else if(splited[0]==='empty') answer.push(queue.length-index===0? 1: 0);
  else if(splited[0]==='front') answer.push(queue.length-index>0? queue[index]:-1);
  else if(splited[0]==='back') answer.push(queue.length-index>0? queue[queue.length-1]:-1);  
}

console.log(answer.join('\n'));