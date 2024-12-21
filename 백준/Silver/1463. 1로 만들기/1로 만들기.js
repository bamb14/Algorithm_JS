const fs = require("fs");
let a = fs.readFileSync(0).toString().trim().split('\n');

let list=[]
list[1]=0
list[2]=1
list[3]=1
function solution_dfs(a){
  for(let i=4; i<=a; i++){
    list[i]=list[i-1]+1
    if(i%2===0) list[i]=Math.min(list[i],list[i/2]+1)
    if(i%3===0) list[i]=Math.min(list[i],list[i/3]+1)
  }
  console.log(list[a])
}

solution_dfs(a);