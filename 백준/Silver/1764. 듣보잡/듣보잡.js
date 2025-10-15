const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const [n,m]=input.shift().split(' ').map(Number);
const answer=[];
const set=new Set();
for(let i=0; i<n; i++){
  set.add(input[i]);
}

for(let i=n; i<n+m; i++){
  if(set.has(input[i])) answer.push(input[i]);
}

console.log(answer.length);
console.log(answer.sort().join('\n'));