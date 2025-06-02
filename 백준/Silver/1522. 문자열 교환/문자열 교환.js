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

input = input + input; 

let minSwap=input.length;

for(let i=0; i<input.length-bCnt; i++){
  let cnt=0;
  for(let j=i; j<i+bCnt; j++){
    if(input[j]==='a') cnt++;
  }
  minSwap = Math.min(minSwap, cnt);
}

console.log(minSwap);