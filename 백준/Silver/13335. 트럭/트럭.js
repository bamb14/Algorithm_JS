const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const [n, w, L] = input[0].split(" ").map(Number);
const trucks=input[1].split(" ").map(Number);

let weight=0;
let time=0;
const queue=[];
let remain=n;

while(remain>0){
  time++;
  for(let i=0; i<queue.length; i++){
    queue[i][1]++;
    if(queue[i][1]>w){
      weight-=queue[i][0];
      queue.shift();
      remain--;
      i--;
    }
  }
  
  if(trucks.length>0 && weight+trucks[0]<=L){
    const next=trucks.shift();
    weight+=next;
    queue.push([next, 1]);
  }
}

console.log(time);