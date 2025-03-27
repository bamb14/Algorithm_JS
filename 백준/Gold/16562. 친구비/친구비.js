const fs=require("fs");
let input=fs.readFileSync(0).toString().trim().split('\n');

const [n,m,k]=input.shift().split(' ').map(Number);
const payList=input.shift().split(' ').map(Number);
const payIndex=payList.map((n,idx)=> [n, idx+1]);
payIndex.sort((a,b)=>a[0]-b[0]);

let parent= new Array(n+1).fill(0).map((value, idx) => idx);

let answer=0;

for(let i=0; i<m; i++){
  const [x,y] = input[i].split(' ');
  if(x===y) continue;
  if(!isUnion(x,y)) {
    union(x,y);
  }
}
for(let i=0; i<n; i++){
  const [pay, x]=payIndex[i];
  if(!isUnion(x,0)){
    union(x,0);
    answer+=pay;
  }
}

let bool=true;
if(k<answer) bool=false;
else{
  for(let i=1; i<=n; i++){
    if(!isUnion(i,0)){
      bool=false;
      break;
    }
  }
}
console.log(bool? answer: 'Oh no');

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