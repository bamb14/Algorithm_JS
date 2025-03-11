const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")

const n = Number(input.shift())
const m = Number(input.shift())
input=input.map(str=>str.split(' ').map(Number))

let info=[]
let parent=new Array(n+1).fill(0).map((value, idx) => idx);
let result=[]

// x의 루트노드 찾는 함수
const find=(x)=>{
  if(parent[x]===x){
    return x;
  }
  const currentParent = find(parent[x]);
  parent[x]=currentParent;
  
  return currentParent;
}

// 두 노드를 합치기 위한 함수
const union=(x,y)=>{
  x=find(x);
  y=find(y);
  
  // x와 y가 같다면 이미 연결되어 있는 경우
  if(x===y) return;
  
  if(x>y) parent[y]=x;
  else parent[x]=y;
}

// 같은 부모를 가지는지 확인하는 함수
const isUnion=(x,y)=>{
  x=find(x);
  y=find(y);
  
  if(x===y) return 'YES';
  return "NO";
}

for(let i=0; i<n; i++){
  for(let j=0; j<n; j++){
    if(input[i][j]===1){
      union(i+1,j+1)
    }
  }
}
let answer='YES';
for(let i=0; i<m-1; i++){
  if(isUnion(input[n][i],input[n][i+1])==='NO'){
    answer='NO'
    break;
  }
}
console.log(answer)