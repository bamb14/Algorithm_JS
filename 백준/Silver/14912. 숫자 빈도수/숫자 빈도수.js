const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k]=input.shift().split(' ').map(Number);

let cnt=0;
for(let i=1; i<=n; i++){
  const list=i.toString().split('');
  for(const char of list){
    if(char==k) cnt++;
  }
}

console.log(cnt);