const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const list=input[0].split(' ').map(Number);
const set=new Set();

for(let len=1; len<=n; len++){
  bt([], len, 0);
}

let answer=0;
for(let i=1; i<=set.size; i++){
  if(!set.has(i)){
    answer=i;
    break;
  }
}
console.log(answer==0? set.size+1:answer);

function bt(arr, len, idx){
  if(arr.length>=len){
    solution(arr);
    return;
  }
  
  for(let i=idx; i<n; i++){
    arr.push(i);
    bt(arr, len, i+1);
    arr.pop();
  }
}

function solution(arr){
  let sum=0;
  for(let idx of arr){
    sum+=list[idx];
  }
  set.add(sum);
}