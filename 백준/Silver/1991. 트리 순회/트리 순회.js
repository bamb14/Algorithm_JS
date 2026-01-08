const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n=Number(input.shift());
const map=new Map();
for(let i=0; i<n; i++){
  const [node, left, right]=input[i].split(' ');
  map.set(node, [left, right]);
}
const answer=Array.from(Array(3), ()=>[]);
recursive('A');

function recursive(node){
  answer[0].push(node);
  const [left, right]=map.get(node);
  if(left!=='.'){
    recursive(left);
  }
  answer[1].push(node);
  if(right!=='.'){
    recursive(right);
  }
  answer[2].push(node);
}

console.log(answer.map(list => list.join('')).join('\n'));