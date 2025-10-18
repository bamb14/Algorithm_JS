const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const [n, m]=input.shift().split(' ').map(Number);

const set=new Set();
for(let i=0; i<n; i++){
  set.add(input[i]);
}
const answer=[];

for(let i=n; i<n+m; i++){
  const keywords=input[i].split(',');
  for(const word of keywords){
    if(set.has(word)) set.delete(word);
  }
  answer.push(set.size);
}

console.log(answer.join('\n'));