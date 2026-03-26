const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const str = input[0];
const list=[str];

for(let i=1; i<str.length; i++){
  list.push(str.slice(i,));
}

list.sort((a,b)=>a.localeCompare(b));

console.log(list.join('\n'));