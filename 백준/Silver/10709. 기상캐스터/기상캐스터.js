const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [h,w] = input.shift().split(' ').map(Number);
const map=input.map(str=>str.split(''));

const answer=Array.from(Array(h), ()=>Array(w).fill(-1));

for(let i=0; i<h; i++){
  let last=map[i][0]=='c'? 0: -1;
  for(let j=0; j<w; j++){
    if(map[i][j]=='c'){
      answer[i][j]=0;
      last=j;
    }
    else{
      if(last!==-1) answer[i][j]=j-last;
    }
  }
}

console.log(answer.map(list=>list.join(' ')).join('\n'));