const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const t = Number(input.shift());
let idx=0;
const answer=[];
for(let i=0; i<t; i++){
  const map=new Map();
  const n=Number(input[idx++]);
  for(let j=0; j<n; j++){
    const [wear, c]=input[idx++].split(' ');
    map.set(c, (map.get(c) || 0)+1);
  }
  
  let acc = 1;
  for (const [key, value] of map) {
    acc *= (value + 1);
  }
  answer.push(acc - 1);
}

console.log(answer.join('\n'));