const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n,m]=input[0].split(' ').map(Number);
const list=input[1].split(' ').map(Number);

let answer=0;

let left=0, right=0;
let sum=list[left];

for(let i=1; i<=n; i++){
  let left=0, right=left+i-1;
  let sum=list.slice(left, right+1).reduce((a,b)=>a+b,0);

  while(right<n && left<=right){
    if(sum===m) answer++;
    sum-=list[left++];
    sum+=list[++right];
  }
}

console.log(answer);