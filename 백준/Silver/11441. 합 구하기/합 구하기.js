const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const list=input.shift().split(' ').map(Number);
const m=Number(input.shift());

const preSum=Array(n+1).fill(0);
preSum[1]=list[0];
for(let i=1; i<n; i++){
  preSum[i+1]+=preSum[i]+list[i];
}

const answer=[];

for(let i=0; i<m; i++){
  const [from, to]=input[i].split(' ').map(Number);
  answer.push(preSum[to]-preSum[from-1]);
}

console.log(answer.join('\n'));