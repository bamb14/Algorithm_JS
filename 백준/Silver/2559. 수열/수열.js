const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k]=input[0].split(' ').map(Number);
const list=input[1].split(' ').map(Number);

let sum=list.slice(0,k).reduce((a,b)=>a+b,0);
let max=sum;

for(let i=k; i<n; i++){
  sum-=list[i-k];
  sum+=list[i];
  max=Math.max(sum, max);
}
console.log(max);