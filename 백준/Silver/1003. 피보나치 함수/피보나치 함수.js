const fs = require("fs");
let a = fs.readFileSync(0).toString().trim().split('\n');




function solution_0(n){
  if(n===0) return 1;
  else if(n===1) return 0;
  else{
      list_0=[1,0]
    for(let i=2; i<=n; i++){
      list_0.push(list_0[i-1]+list_0[i-2])
    }
    return list_0[n]
  }
}
function solution_1(n){
  if(n===0) return 0;
  else if(n===1) return 1;
  else{
     list_1=[0,1]
    for(let i=2; i<=n; i++){
      list_1.push(list_1[i-1]+list_1[i-2])
    }
    return list_1[n]
  }
}

for(let i=1; i<=a[0]; i++){
  console.log(solution_0(a[i]), solution_1(a[i]));
}