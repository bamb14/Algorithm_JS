const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n,k]=input.shift().split(' ').map(Number);
const list=input[0].split('');

const selected=Array(n).fill(false);
let answer=0;

for(let i=0; i<n; i++){
  if(list[i]=='P'){
    let index=-k;
    while(index<=k && i+index<n){
      if(i+index>=0){
        if(list[i+index]=='H' && !selected[i+index]){
          answer++;
          selected[i+index]=true;
          break;
        }
      }
      index++;
    }
  }
}

console.log(answer);