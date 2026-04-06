const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const t=Number(input.shift());
const answer=[];

for(let c=0; c<t; c++){
  const n=Math.sqrt(input[c].length);
  const str=[];
  for(let i=0; i<n; i++){
    str.push(input[c].slice(n*i, n*(i+1)));
  }

  const letter=[];
  for(let i=n-1; i>=0; i--){
    let list=[];
    for(let j=0; j<n; j++){
      letter.push(str[j][i]);
    }
  }
  answer.push(letter.join(''));
}
console.log(answer.join('\n'));