const fs=require("fs");
const input=fs.readFileSync(0).toString().trim().split('\n');

const list=input[0].split('').sort();
const n=list.length;
let flag=true;

const result=Array(n);

let isOdd=false;
for(let i=0; i<n-1; i++){
  if(list[i]==list[i+1]){
    result[Math.floor(i/2)]=list[i];
    result[n-1-Math.floor(i/2)]=list[i];
    i++;
  }
  else{
    if(n%2!==0 && !isOdd){
      isOdd=true;
      result[Math.floor(n/2)]=list[i];
    }
    else{
      console.log(`I'm Sorry Hansoo`);
      return;
    }
  }
}
if(n%2!==0 && !isOdd) result[Math.floor(n/2)]=list[n-1];

console.log(result.join(''));