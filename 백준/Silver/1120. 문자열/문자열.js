const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [a,b] = input[0].split(' ');

let min=a.length;
for(let i=0; i+a.length<=b.length; i++){
  let cnt=0;
  for(let j=0; j<a.length; j++){
    if(a[j]!==b[i+j]) cnt++;
  }
  min=Math.min(cnt, min);
}

console.log(min);