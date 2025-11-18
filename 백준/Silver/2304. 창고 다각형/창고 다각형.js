const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n=Number(input.shift());
const list=input.map(str=>str.split(' ').map(Number)).sort((a,b)=>a[0]-b[0]);

let max=Math.max(...list.map(x=>x[1]));
let height=list[0][1];
let width=list[0][0];
let answer=0;

for(let i=0; i<n; i++){
  const [x,y]=list[i];
  if(y>height){
    answer+=height*(x-width);
    width=x;
    height=y;
  }
  if(height===max){
    answer+=height;
    let h=list[n-1][1];
    let w=list[n-1][0];
    for(let j=n-2; j>=i; j--){
      const [x,y]=list[j];
      if(y>=h){
        answer+=h*(w-x);
        w=x;
        h=y;
      }
    }
    break;
  }
}

console.log(answer);