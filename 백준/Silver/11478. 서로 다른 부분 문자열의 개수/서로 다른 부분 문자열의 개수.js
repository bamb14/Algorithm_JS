const fs=require("fs");
let input=fs.readFileSync(0).toString().trim().split('\n');

let S=input[0].split('');
let len=input[0].length;
let set = new Set();


for(let i=1; i<=len; i++){
  for(let j=0; j<len-i+1; j++){
    const sub=input[0].substring(j, j+i);
    set.add(sub);
  }
}
console.log(set.size);