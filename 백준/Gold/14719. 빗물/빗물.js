const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [h,w]=input[0].split(' ').map(Number);
const list=input[1].split(' ').map(Number);

let maxHeight=Math.max(...list);
let max=list[0];
let prev=0;
let answer=0;

for(let i=0; i<list.length; i++){
  if(max<=list[i]){
    for(let j=prev; j<i; j++){
      answer+=max-list[j];
    }
    prev=i;
    max=list[i];
  }
  
  if(max===maxHeight){
    max=list[w-1]
    prev=w-1;
    
    for(let j=w-1; j>=i; j--){
      if(max<=list[j]){
        for(let k=prev; k>j; k--){
          answer+=max-list[k];
        }
        prev=j;
        max=list[j];
      }
    }
    break;
  }
}
console.log(answer);