const fs=require("fs");
let input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const list=input.map(str=>str.split(' ').map(Number));
list.sort((a,b)=>{
  if(a[1]===b[1]) return a[0]-b[0]
  else return a[1]-b[1]
});

let count=1;
let endTime=list[0][1];

for(let i=1; i<n; i++){
    const [start, end]=list[i];
    if(start>=endTime){
      count++;
      endTime=end;
    }
}

console.log(count);