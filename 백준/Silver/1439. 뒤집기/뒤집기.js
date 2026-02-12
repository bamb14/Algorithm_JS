const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const s=input[0];
const n=s.length;
const count=Array(2).fill(0);

for(let i=1; i<n; i++){
  if(s[i-1]!==s[i]) count[s[i-1]]++;
}
count[s[n-1]]++;

console.log(Math.min(...count));