const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const target=Number(input[0])
const list1=input[2].split(' ').map(Number)
const list2=input[4].split(' ').map(Number)

let count=0;

let A = new Map();

for(let i=0; i<list1.length; i++){
  let sum=0;
  for(let j=i; j<list1.length; j++){
    sum+=list1[j]
    A.set(sum, (A.get(sum) ?? 0) + 1)
  }
}

for(let i=0; i<list2.length; i++){
  let sum=0;
  for(let j=i; j<list2.length; j++){
    sum+=list2[j];
    count+=A.get(target-sum) ?? 0;
  }
}

console.log(count)