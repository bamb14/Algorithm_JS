const fs = require("fs");
let a = fs.readFileSync(0).toString().trim().split('\n');

let list=[]
list[1]=1
list[2]=2
list[3]=4
list[4]=7
function solution_dfs(a){
  for(let i=5; i<=a; i++){
    list[i]=list[i-1]+list[i-2]+list[i-3]
  }
  console.log(list[a])
}
for(let i=0; i<a[0]; i++){
  solution_dfs(a[i+1]);  
}