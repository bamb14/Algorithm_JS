const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n,m]=input.shift().split(' ').map(Number);
const arr1=input[0].split(' ').map(Number);
const arr2=input[1].split(' ').map(Number);

const answer=new Array(n+m);
let i=0, p1=0, p2=0;

while(p1<n && p2<m){
  const n1=arr1[p1];
  const n2=arr2[p2];
  if(n1<=n2){
    answer[i++]=n1;
    p1++;
  }
  else {
    answer[i++]=n2;
    p2++;
  }
}

while(p1<n) answer[i++]=arr1[p1++];
while(p2<m) answer[i++]=arr2[p2++];

console.log(answer.join(' '));