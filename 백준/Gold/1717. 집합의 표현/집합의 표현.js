const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")

const [n,m] = input.shift().split(' ').map(Number)
const list = input.map(str=>str.split(' ').map(Number))

let parent=new Array(n+1).fill(0).map((value, idx) => idx);
let result=[]

const find=(x)=>{
  if(parent[x]===x){
    return x;
  }
  const currentParent=find(parent[x]);
  parent[x]=currentParent;
  
  return currentParent;
}

// 두 노드를 합치기 위한 함수
const union=(x,y)=>{
  x=find(x);
  y=find(y);
  
  // x와 y가 같다면 이미 연결되어 있는 경우
  if(x===y) return;
  
  if(x<y) parent[y]=x;
  else parent[x]=y;
}

// 같은 부모를 가지는지 확인하는 함수
const isUnion=(x,y)=>{
  x=find(x);
  y=find(y);
  
  if(x===y) return 'YES';
  return "NO";
}

for(let i=0; i<m; i++){
  if(list[i][0]===0) union(list[i][1],list[i][2])
  else result.push(isUnion(list[i][1],list[i][2]))
}
console.log(result.join('\n'))