const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());
const list=input.map(str=>str.split(' ').map(Number));
list.push(list[0]);

let prev=0, next=0;

for(let i=0; i<n; i++){
 prev+=list[i][0]*list[i+1][1];
 next+=list[i][1]*list[i+1][0];
}

console.log((Math.abs(prev-next)/2).toFixed(1));