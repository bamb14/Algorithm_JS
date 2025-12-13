const fs=require("fs");
const input=fs.readFileSync(0).toString().trim().split('\n');

const N=Number(input.shift());
const list=input.shift().split(' ').map(Number);
const students=Number(input.shift());
for(let i=0; i<students; i++){
  const [sex, n]=input[i].split(' ').map(Number);
  if(sex==1){
    for(let i=n-1; i<N; i+=n) change(i);
  }
  else{
    change(n-1);
    let left=n-2, right=n;
    while(left>=0 && right<N){
      if(list[left]!==list[right]) break;
      change(left);
      change(right);
      left--;
      right++;
    }
  }
}

const answer=[];
const m=Math.ceil(N/20);
for(let i=0; i<m; i++) answer.push(list.slice(i*20, i*20+20).join(' '));

console.log(answer.join('\n'));

function change(position){
  if(list[position]==1) list[position]=0;
  else list[position]=1;
}