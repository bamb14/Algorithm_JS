const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let [h,w]=input[0].split(' ').map(Number);
let blocks=input[1].split(' ').map(Number);

let left=[0];
let right=[0];
let l=0;r=0;
for(let i=1; i<w; i++){
  l=Math.max(l, blocks[i-1]);
  left.push(l);
}
for(let i=w-2; i>-1; i--){
  r=Math.max(r, blocks[i+1])
  right.push(r);
}
right.reverse();

let answer=0;
for(let i=1; i<w; i++){
  if(left[i]>blocks[i] && right[i]>blocks[i]){
    let min=Math.min(left[i], right[i]);
    answer+=(min-blocks[i]);
  }
}

console.log(answer);