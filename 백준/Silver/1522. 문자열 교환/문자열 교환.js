const fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n').join('');

let bCnt=0;
let start=-1;
for(let i=0; i<input.length; i++){
  if(input[i]==='b') {
    bCnt++;
  }
}

if(bCnt===0){
  console.log(bCnt);
  return;
}

let total=0;
for (let i = 0; i < bCnt; i++) {
  if (input[i] === 'a') total++;
}

let minSwap=total;

for(let i=1; i<input.length; i++){
  let out=input[(i-1) % input.length]; // 윈도우 맨 앞
  let inChar=input[(i + bCnt - 1) % input.length];
  if(out === 'a') total--;
  if(inChar === 'a') total++;
  minSwap = Math.min(minSwap, total);
}

console.log(minSwap);