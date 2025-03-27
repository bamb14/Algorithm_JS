const fs=require("fs");
let input=fs.readFileSync(0).toString().trim().split('\n');

const [v,e]=input.shift().split(' ').map(Number);
input=input.map(str=>str.split(' ').map(Number)).sort((a,b)=>a[2]-b[2]);
let parent=new Array(v+1).fill(0).map((n,idx)=>idx);

let answer=0;

for(let i=0; i<e; i++){
  const [v1, v2, cost]=input[i];
  if(!isUnion(v1,v2)){
    union(v1,v2);
    answer+=cost;
  }
}
console.log(answer);

function find(x){
  if(parent[x]===x) return x;
  
  const currentParent = find(parent[x]);
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