const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input[0]);
const list=input[1].split(' ').map(Number).sort((a,b)=>a-b);

let left=0, right=n-1;
let a1, a2;
let min=Infinity;

while(left<right){
  let sum=list[left]+list[right];

  if(sum===0) {
    a1=list[left];
    a2=list[right];
    break;
  }
  
  if(min>Math.abs(sum)) {
    min=Math.abs(sum);
    a1=list[left];
    a2=list[right];
  }
  
  if(sum<0) left++;
  else right--;
}

console.log(a1, a2);