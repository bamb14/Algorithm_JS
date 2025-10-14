const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

let [a,b]=input[0].split(' ').map(Number);

const queue=[[b,1]];
let answer=-1;

while(queue.length>0){
  const [curr, cnt]=queue.shift();
  
  if(curr===a) {
    answer=cnt;
    break;
  }
  
  if((curr-1)%10===0 && (curr-1)/10 >=a) queue.push([(curr-1)/10, cnt+1]);
  if(curr%2===0 && curr/2>=a) queue.push([curr/2, cnt+1]);
}

console.log(answer);