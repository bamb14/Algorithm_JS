const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n=Number(input.shift());

const set=new Set();
const answer=[];

for(let word of input){
  const list=word.split(' ');
  let flag=false;
  for(let i=0; i<list.length; i++){
    if(!set.has(list[i][0].toUpperCase())){
      set.add(list[i][0].toUpperCase());
      list[i]='['+list[i][0]+']'+list[i].slice(1,);
      flag=true;
      answer.push(list.join(' '));
      break;
    }
  }
  if(!flag){
    for(let i=1; i<word.length; i++){
      if(word[i]!==' ' && !set.has(word[i].toUpperCase())){
        set.add(word[i].toUpperCase());
        word=word.slice(0,i)+'['+word[i]+']'+word.slice(i+1,);
        break;
      }
    }
    answer.push(word);
  }
}

console.log(answer.join('\n'));
