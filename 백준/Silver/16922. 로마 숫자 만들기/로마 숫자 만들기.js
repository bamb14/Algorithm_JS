const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const list=[1, 5, 10, 50];
const set=new Set();

bt([], 0);

console.log(set.size);

function bt(arr, idx){
  if(arr.length>=n){
    solution(arr);
    return;
  }
  
  for(let i=idx; i<4; i++){
    arr.push(i);
    bt(arr, i);
    arr.pop();
  }
}

function solution(arr){
  let sum=0;
  for(const idx of arr){
    sum+=list[idx];
  }
  set.add(sum);
}