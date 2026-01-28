const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const list=[...new Set(input)];

list.sort((a,b)=>{
  if(a.length!==b.length){
    return a.length-b.length;
  }
  return a.localeCompare(b);
});

console.log(list.join('\n'));