const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m]=input[0].split(' ').map(Number);
const list=input[1].split(' ').map(Number);

let answer=0;
let left=0, right=Math.max(...list);

while(left<=right){
  const mid=Math.floor((left+right)/2);
  
  let sum=0;
  for(const h of list){
    if(h>mid) sum+=h-mid;
  }
  
  if(sum>=m){
    left=mid+1;
    answer=Math.max(answer, mid);
  }
  else right=mid-1;
}

console.log(answer);