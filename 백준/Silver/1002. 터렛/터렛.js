const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const t=Number(input.shift());
const answer=[];
for(let i=0; i<t; i++){
  const [x1, y1, r1, x2, y2, r2]=input[i].split(' ').map(Number);
  const dist=(x1-x2)**2 + (y1-y2)**2;
  
  if(x1==x2 && y1==y2){
    if(r1 == r2) answer.push(-1);
    else answer.push(0);    
  }
  else{
    const diff = Math.abs(r1-r2);
    if(dist>(r1+r2)**2) answer.push(0);
    else if(dist==(r1+r2)**2) answer.push(1);
    else if(dist<diff**2) answer.push(0);
    else if(dist==diff**2) answer.push(1);
    else answer.push(2);
  }
}

console.log(answer.join('\n'));