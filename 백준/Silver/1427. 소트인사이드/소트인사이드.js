const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const n=input[0];
const list=n.split('').sort((a,b)=>b-a);
console.log(list.join(''));