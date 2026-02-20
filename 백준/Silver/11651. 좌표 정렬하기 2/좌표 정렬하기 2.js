const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const list=input.map(str=>str.split(' ').map(Number));
list.sort((a,b)=>{
  if(a[1]==b[1]) return a[0]-b[0];
  return a[1]-b[1];
})

console.log(list.map(item=>item.join(' ')).join('\n'));