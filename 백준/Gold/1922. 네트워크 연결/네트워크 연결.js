const fs=require("fs");
let input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const m=Number(input.shift());

let parent=new Array(n+1).fill(0).map((n,idx)=>idx);

input=input.map(str=>str.split(' ').map(Number));
input.sort((a,b)=>a[2]-b[2]);

let answer=0;
let count=0;
for(const [x,y,cost] of input){
  if(!isUnion(x,y)){
    union(x,y);
    answer += cost;
    count++;
    if (count === n - 1) break;
  }
}
console.log(answer);

function find(x){
  if(parent[x]===x) return x;
  
  const currentParent=find(parent[x]);
  parent[x]=currentParent;
  
  return currentParent;
}

function union(x,y){
  x=find(x);
  y=find(y);
  
  if(x===y) return;
  if(x<y) parent[x]=y;
  else parent[y]=x;
}

function isUnion(x,y){
  x=find(x);
  y=find(y);
  
  if(x===y) return true;
  else return false;
}