const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")

const [n,m] =input.shift().split(' ').map(Number)
input=input.map(str=>str.split(' ').map(Number))

let info=[]
let parent=new Array(n+1).fill(0).map((value, idx) => idx);
let result=[]

let answer=0;
for(let i=0; i<m; i++){
  const [x,y]=input[i]
  
  if(isUnion(x,y)){
    answer=i+1;
    break;
  }else union(x, y)
}
console.log(answer)

// x의 루트노드 찾는 함수
function find(x){
  if(parent[x]===x){
    return x;
  }
  const currentParent = find(parent[x]);
  parent[x]=currentParent;
  
  return currentParent;
}

// 두 노드를 합치기 위한 함수
function union(x,y){
  x=find(x);
  y=find(y);
  // console.log(x,y)
  
  // x와 y가 같다면 이미 연결되어 있는 경우
  if(x===y) return;
  
  if(x>y) parent[y]=x;
  else parent[x]=y;
  // console.log(parent)
}

// 같은 부모를 가지는지 확인하는 함수
function isUnion(x,y){
  x=find(x);
  y=find(y);
  
  if(x===y) return true;
  return false;
}