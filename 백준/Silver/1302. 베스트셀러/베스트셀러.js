const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const map = new Map();

for(const book of input){
  map.set(book, (map.get(book) || 0) + 1);
}

const list=[...map.entries()];

list.sort((a,b)=>{
  if(a[1]==b[1]) return a[0].localeCompare(b[0]);
  return b[1]-a[1];
})

console.log(list[0][0]);