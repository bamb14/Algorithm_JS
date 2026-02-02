const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const [n, l]=input.shift().split(' ').map(Number);
const list=input[0].split(' ').map(Number);

let sum=0;
let answer=0;
for(let i=0; i<l; i++){
  sum+=list[i];
  if(129<=sum && sum<=138) answer++;
}

for(let i=l; i<n; i++){
  sum+=list[i];
  sum-=list[i-l];
  if(129<=sum && sum<=138) answer++;
}

console.log(answer);