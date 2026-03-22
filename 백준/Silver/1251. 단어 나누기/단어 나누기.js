const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const word = input[0];
const n=word.length;
const answer=[];

for(let i=0; i<n-2; i++){
  const first=word.slice(0, i+1);
  const reFirst=first.split('').reverse().join('');

  for(let j=i+1; j<n-1; j++){
    const second=word.slice(i+1, j+1);
    const third=word.slice(j+1, n);
    
    const reSecond=second.split('').reverse().join('');
    const reThird=third.split('').reverse().join('');
    
    const str=reFirst+reSecond+reThird;
    answer.push(str);
  }
}

answer.sort((a,b)=>a.localeCompare(b));

console.log(answer[0]);