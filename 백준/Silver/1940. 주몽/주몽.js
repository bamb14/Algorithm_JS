const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n=Number(input.shift());
const m=Number(input.shift());
const list=input[0].split(' ').map(Number);
list.sort((a,b)=>a-b);

let answer=0;
let left=0, right=n-1;

while(left<right){
  const sum=list[left]+list[right];
  
  if(sum==m){
    answer++;
    left++;
    right--;
  }
  if(sum<m) left++;
  if(sum>m) right--;
}

console.log(answer);