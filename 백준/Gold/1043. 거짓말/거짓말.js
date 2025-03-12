const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n")

const [n,m] =input.shift().split(' ').map(Number)

let parent=new Array(n+1).fill(0).map((value, idx) => idx);

solution()

function solution(){
  let know_list=[]
  let list=input[0].split(' ').map(Number)
  if(list.shift()!==0){
    list.forEach((a,b)=>{
      know_list.push(a)
    })
    if(list.length>1){
      for(let i=0; i<list.length-1; i++){
        union(list[i],list[i+1])
      }
    }
  }
  let answer=0;
  for(let i=1; i<=m; i++){
    const [n, ...list]=input[i].split(' ').map(Number);
    if(list.length>1){
      for(let i=0; i<list.length-1; i++){
        union(list[i],list[i+1])
      }
    }
  }
  for(let i=1; i<=m; i++){
    const [n, ...list]=input[i].split(' ').map(Number);
    const filter=list.filter(a=>isUnion(a,know_list[0]))
    if(filter.length===0){
     answer++ 
    }
  }
  console.log(answer)
}

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
  
  // x와 y가 같다면 이미 연결되어 있는 경우
  if(x===y) return;
  
  if(x<y) parent[x]=y;
  else parent[y]=x;
}

// 같은 부모를 가지는지 확인하는 함수
function isUnion(x,y){
  x=find(x);
  y=find(y);
  
  if(x===y) return true;
  return false;
}