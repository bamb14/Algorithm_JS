const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k]=input.shift().split(' ').map(Number);

const visited=Array(n+1).fill(false);

let p=2;
let cnt=0;

while(cnt<k){
  for(let i=p; i<=n; i+=p) {
    if(visited[i]) continue;
    cnt++;
    if(cnt==k){
      console.log(i);
      break;
    }
    visited[i]=true;
  }
  
  for(let i=p+1; i<=n; i++){
    if(!visited[i]){
      p=i;
      break;
    }
  }
}