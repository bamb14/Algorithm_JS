const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input.shift());
let list=input;
const set=new Set();
const result=[];

for(const word of list){
  let i=0;
  let plag=false;
  let prev=[];
  let words=word.split(' ');
  while(i<words.length){
    if(!set.has(words[i][0].toUpperCase())){
      set.add(words[i][0].toUpperCase());
      let curr='['+words[i][0]+']'+words[i].slice(1,);
      let next=[];
      for(let j=i+1; j<words.length; j++){
        next.push(words[j]);
      }

      prev.push(curr);
      prev.push(...next);
      result.push(prev.join(' '));
      
      plag=true;
      break;
    }
    prev.push(words[i]);
    i++;
  }
  if(!plag){
    for(let i=1; i<word.length; i++){
      if(word[i]!==' ' && !set.has(word[i].toUpperCase())){
        set.add(word[i].toUpperCase());
        result.push(word.slice(0,i)+'['+word[i]+']'+word.slice(i+1,));
        plag=true;
        break;
      }
    }
  }
  if(!plag) result.push(word);
}

console.log(result.join('\n'));