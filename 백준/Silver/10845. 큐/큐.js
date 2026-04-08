const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const queue=[];
const answer=[];

for(let i=0; i<n; i++){
  const command=input[i].split(' ');
  if(command.length>1){
    queue.push(Number(command[1]));
  }
  else if(command[0]=='pop'){
    answer.push(queue.length>0? queue[0] : -1);
    queue.shift();
  }
  else if(command[0]=='size'){
    answer.push(queue.length);
  }
  else if(command[0]=='empty'){
    answer.push(queue.length>0? 0 : 1);
  }
  else if(command[0]=='front'){
    answer.push(queue.length>0? queue[0] : -1);
  }
  else if(command[0]=='back'){
    answer.push(queue.length>0? queue[queue.length-1] : -1);
  }
}

console.log(answer.join('\n'));