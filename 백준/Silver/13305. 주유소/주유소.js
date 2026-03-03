const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const dist=input[1].split(' ').map(Number);
const list=input[2].split(' ').map(Number);

let index=0;
for(let i=1; i<n-1; i++){
  if(list[index]>list[i]) index=i;
}

if(index==0){
  const total=dist.reduce((a,b)=>a+b,0);
  console.log(total*list[index]);
}
else{
  let prev=0;
  let min=0, sum=dist[0];
  for(let i=1; i<=index; i++){
    if(list[min]>list[i]){
      prev+=sum*list[min];
      sum=dist[i];
      min=i;
    }
    else sum+=dist[i];
  }

  const next=dist.slice(index).reduce((a,b)=>a+b,0);
  console.log(prev+next*list[index])
}