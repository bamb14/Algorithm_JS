const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input[0]);
const list=input[1].split(' ').map(Number);
const answer=new Array(n).fill(null);

for(let i=n; i>0; i--){
  const left=list[i-1];
  if(!answer[left]) answer[left]=i;
  else{
    const temp=answer.slice(left,-1);
    
    answer[left]=i;
    for(let j=1; j<=temp.length; j++){
      answer[left+j]=temp[j-1];
    }
  }
}

console.log(answer.join(' '));