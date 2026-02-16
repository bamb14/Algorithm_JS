const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const [n, k]=input[0].split(' ').map(Number);

const visited=Array(n+1).fill(false);
const answer=[];
let curr=1;

while(answer.length<n){
  move();
  visited[curr]=true;
  answer.push(curr);
}
console.log('<'+answer.join(', ')+'>');

function move(){
  let i=1;
  while(i<k){
    if(!visited[curr]) i++;
    curr=curr%n+1;
  }
  
  while(visited[curr]) curr=curr%n+1;
}