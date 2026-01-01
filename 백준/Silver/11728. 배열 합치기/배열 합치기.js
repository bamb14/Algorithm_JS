const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n,m]=input.shift().split(' ').map(Number);
const arr1=input[0].split(' ').map(Number);
const arr2=input[1].split(' ').map(Number);

const answer=[];

let p1=0, p2=0;

while(p1<n && p2<m){
  const n1=arr1[p1];
  const n2=arr2[p2];
  if(n1==n2){
    answer.push(n1);
    answer.push(n2);
    p1++;
    p2++;
  }
  if(n1<n2){
    answer.push(n1);
    p1++;
  }
  else if(n1>n2){
    answer.push(n2);
    p2++;
  }
}

if(p1===n){
  const remain=arr2.slice(p2,);
  answer.push(...remain);
}
else {
  const remain=arr1.slice(p1,);
  answer.push(...remain);
}

console.log(answer.join(' '));