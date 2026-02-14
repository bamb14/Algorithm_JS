const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const [n,m]=input.shift().split(' ').map(Number);

const answer=[];
const map=new Map();
for(const word of input){
  if(word.length<m) continue;
  
  map.set(word, (map.get(word) || 0)+1);
}

const sorted=[...map.entries()].sort((a,b)=> b[1]-a[1]);

const list=[sorted[0][0]];
let max=sorted[0][1];

for(let i=1; i<sorted.length; i++){
  const [key, value]=sorted[i];
  if(max==value) list.push(key);
  else{
    wordLength(list);
    
    list.length=0;
    list.push(key);
    max=value;
  }
}

if(list.length>0) wordLength(list);

console.log(answer.join('\n'));

function wordLength(arr){
  arr.sort((a,b)=>b.length-a.length);
  const long=[arr[0]];
  let maxLength=arr[0].length;
  
  for(let j=1; j<arr.length; j++){
    if(maxLength==arr[j].length) long.push(arr[j]);
    else{
      dict(long);
      
      long.length=0;
      long.push(arr[j]);
      maxLength=arr[j].length;
    }
  }
  
  if(long.length>0){
    dict(long);
  }
}

function dict(arr){
  arr.sort();
  answer.push(...arr);
}