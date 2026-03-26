const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const list=input.map(str=>str.split(' ').map(Number));
let min=Infinity;

for(let len=1; len<=n; len++){
  bt([], len, 0);
}
console.log(min);

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
  let sour=1, bitter=0;
  for(let idx of arr){
    const [s,b]=list[idx];
    sour*=s;
    bitter+=b;
  }
  
  min=Math.min(min, Math.abs(sour-bitter));
}