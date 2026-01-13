const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const list=input.map(Number);
const map=new Map();
map.set(list[0], [null, null]);
for(let i=1; i<list.length; i++){
  map.set(list[i],[null, null]);
  preorder(list[0], list[i]);
}

function preorder(node, curr){
  const children=map.get(node);
  
  if(curr<node){ // 왼쪽
    if(children[0]) preorder(children[0], curr);
    else{
      children[0]=curr;
    }
  }
  if(curr>node){
    if(children[1]) preorder(children[1], curr);
    else{
      children[1]=curr;
    }
  }
}

const answer=[];
postorder(list[0]);

function postorder(node){
  const [left, right]=map.get(node);
  
  if(left){
    postorder(left);
    answer.push(left);
  }
  if(right){
    postorder(right);
    answer.push(right);
  }
}
answer.push(list[0]);

console.log(answer.join('\n'));