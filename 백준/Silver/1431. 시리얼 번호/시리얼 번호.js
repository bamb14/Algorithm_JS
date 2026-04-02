const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
input.sort((a,b)=>{
  if(a.length!==b.length) return a.length-b.length;
  
  let aSum=0, bSum=0;
  for(let i=0; i<a.length; i++){
    if(!isNaN(a[i])) aSum+=Number(a[i]);
    if(!isNaN(b[i])) bSum+=Number(b[i]);
  }

  if(aSum!==bSum) return aSum-bSum;
  
  return a.localeCompare(b);
})

console.log(input.join('\n'));