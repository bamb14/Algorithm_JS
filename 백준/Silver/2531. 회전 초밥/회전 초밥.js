const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, d, k, c]=input.shift().split(' ').map(Number);
const list=input.map(Number);
list.push(...list);

let answer=0;

for(let i=0; i<n; i++){
  const slice=list.slice(i, i+k);
  const set = new Set();
  
  for(const sushi of slice){
    if(!set.has(sushi)) set.add(sushi);
  }
  
  if(!set.has(c)) set.add(c);
  
  answer=Math.max(answer, set.size);
}

console.log(answer);