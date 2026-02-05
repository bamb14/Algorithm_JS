const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const [n, m]=input.shift().split(' ').map(Number);
const map=new Map();
for(let i=0; i<n; i++){
  const [site, pw]=input[i].split(' ');
  map.set(site, pw);
}

const answer=[];
for(let i=0; i<m; i++){
  const site = input[n+i];
  answer.push(map.get(site));
}

console.log(answer.join('\n'));