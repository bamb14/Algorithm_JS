const fs=require("fs");
const input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const target=input.shift();
const list=input;

const map=new Map();
for(let i=0; i<target.length; i++){
  const curr=target[i];
  if(map.has(curr)){
    map.set(curr, map.get(curr)+1);
  }
  else map.set(curr, 1);
}

let answer=0;
for(const word of list){
  // 두 자리 이상 차이는 패스
  if(Math.abs(target.length-word.length)>1){
    continue;
  }
  
  const copy=new Map(map);
  
  for(let i=0; i<word.length; i++){
    const curr=word[i];
    
    if(copy.has(curr)){
      const num=copy.get(curr);

      if(num===1) copy.delete(curr);
      else copy.set(curr, num-1);
    }
    else copy.set(curr, -1);
  }
  if(copy.size===0) answer++;
  else if(copy.size===1){
    const num=Math.abs([...copy.values()][0]);
    if(num===1) answer++;
  }
  else if(copy.size===2){
    const vals = [...copy.values()].sort((a, b) => a - b);
    if (vals[0] === -1 && vals[1] === 1) answer++;
  }
}

console.log(answer);