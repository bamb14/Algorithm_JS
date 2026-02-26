const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const list=input[0].split('');

let redTotal=0, blueTotal=0;

for(let b of list){
  if(b=='R') redTotal++;
  else if(b=='B') blueTotal++;
}

let leftRed=0;
for(let b of list){
  if(b=='R') leftRed++;
  else break;
}

let rightRed=0;
for(let i=n-1; i>=0; i--){
  if(list[i]=='R') rightRed++;
  else break;
}

let leftBlue=0;
for(let b of list){
  if(b=='B') leftBlue++;
  else break;
}

let rightBlue=0;
for(let i=n-1; i>=0; i--){
  if(list[i]=='B') rightBlue++;
  else break;
}

const redMin=redTotal-Math.max(leftRed, rightRed);
const blueMin=blueTotal-Math.max(leftBlue, rightBlue);

console.log(Math.min(redMin, blueMin));