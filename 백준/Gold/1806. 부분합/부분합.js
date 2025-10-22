const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n,s]=input[0].split(' ').map(Number);
const list=input[1].split(' ').map(Number);

let left=0, right=0;
let sum=list[left];
let len=Infinity;

while(right<n && left<=right){
  if(sum>=s){
    len=Math.min(len, right-left+1);
    sum-=list[left++];
  }
  else sum+=list[++right];
}

console.log(len===Infinity? 0: len);
