const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const N=Number(input[0]);
const list=input[1].split(' ').map(Number).sort((a,b)=>a-b);
const M=Number(input[2]);
const numbers=input[3].split(' ').map(Number);

const answer=[];
for(const n of numbers){
  let left=0, right=N-1;
  let flag=0;
  while(left<=right){
    const mid=Math.floor((left+right)/2);
    
    if(list[mid]===n){
      flag=1;
      break;
    }
    if(list[mid]<=n) left=mid+1;
    else right=mid-1;
  }
  
  answer.push(flag);
}

console.log(answer.join('\n'));