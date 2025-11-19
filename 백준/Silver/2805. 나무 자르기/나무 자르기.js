const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n,m]=input[0].split(' ').map(Number);
const list=input[1].split(' ').map(Number);

let left=0; right=Math.max(...list);
let answer=0;

while(left<=right){
  const mid=Math.floor((left+right)/2);

  let num=0;
  for(const h of list){
    if(h>mid) num+=h-mid;
  }

  if(num>=m){
    answer=Math.max(answer, mid);
    left=mid+1;
  }
  else right=mid-1;
}

console.log(answer);