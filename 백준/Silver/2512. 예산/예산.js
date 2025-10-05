const fs=require("fs");
const input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input[0]);
const list=input[1].split(' ').map(Number);
const m=Number(input[2]);

const total=list.reduce((a,b)=>a+b,0);
const max=Math.max(...list);

if(total<=m){
  console.log(max);
  return;
}
else{
  let answer=0;
  
  let left=1;
  let right=max;
  
  while(left<=right){
    let mid=Math.floor((left+right)/2);
    
    let max=solution(mid);
    
    if(answer<max){
      answer=max;
      left=mid+1;
    }
    else right=mid-1;
  }
  console.log(answer);
}

function solution(mid){
  let max=0;
  let remain=m;
  for(const num of list){
    
    if(num>=mid){
      remain-=mid;
      if(max<mid) max=mid;
    }
    else{
      remain-=num;
      if(max<num) max=num;
    }
  }
  if(remain<0) return -1;
  else return max;
}