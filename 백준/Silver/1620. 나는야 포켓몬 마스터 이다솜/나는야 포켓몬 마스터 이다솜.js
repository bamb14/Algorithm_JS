const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const name=new Map();
const number=new Map();

for(let i=0; i<n; i++){
  name.set(input[i], i+1);
  number.set(i+1, input[i]);
}

const answer=[];
for(let i=n; i<n+m; i++){
  if(isNaN(input[i])) answer.push(name.get(input[i]));
  else answer.push(number.get(Number(input[i])));
}

console.log(answer.join('\n'));