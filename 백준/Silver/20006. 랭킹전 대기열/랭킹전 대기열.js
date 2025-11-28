const fs=require("fs");
let input=fs.readFileSync(0).toString().trim().split('\n');

const [p, m]=input.shift().split(' ').map(Number);

const players=new Map();
const rooms=[];

for(let i=0; i<p; i++){
  const [level, nickname]=input[i].split(' ');
  
  let flag=true;
  for(const list of rooms){
    if(list.length>=m) continue;
    
    const firstLevel=Number(players.get(list[0]));
    if(Number(level)>=firstLevel-10 && Number(level)<=firstLevel+10){
      list.push(nickname);
      flag=false;
      break;
    }
  }
  
  if(flag) rooms.push([nickname]);
  players.set(nickname, level);
}

const answer=[];
for(const list of rooms){
  list.sort();
  if(list.length>=m){
    answer.push('Started!');
  }
  else answer.push('Waiting!');
  
  for(const nickname of list){
    answer.push(`${players.get(nickname)} ${nickname}`);
  }
}
console.log(answer.join('\n'));