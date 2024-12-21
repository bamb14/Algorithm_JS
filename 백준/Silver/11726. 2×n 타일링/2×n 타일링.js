const fs = require("fs");
let a = parseInt(fs.readFileSync(0).toString().trim());

let list=[]
list[1]=1
list[2]=2
list[3]=3
list[4]=5
function solution_dfs(a){
  for(let i=5; i<=a; i++){
    list[i]=list[i-1]+list[i-2]%10007
  }
  console.log(list[a]%10007)
}

solution_dfs(a);