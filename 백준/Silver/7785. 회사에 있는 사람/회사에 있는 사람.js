const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());

const set=new Set();

for(const str of input){
  const [name, log]=str.split(' ');
  
  if(set.has(name) && log=='leave') set.delete(name);
  else if(!set.has(name) && log=='enter') set.add(name);
}

console.log([...set].sort().reverse().join('\n'));