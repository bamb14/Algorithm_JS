const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const [n, m]=input[0].split(' ').map(Number);
const set1=new Set();
const set2=new Set();

const list1=input[1].split(' ').map(Number);
const list2=input[2].split(' ').map(Number);

for(let i=0; i<n; i++){
  const num=list1[i];
  set1.add(num);
}
for(let i=0; i<m; i++){
  const num=list2[i];
  set2.add(num);
}
for(let i=0; i<n; i++){
  const num=list1[i];
  if(set2.has(num)) set2.delete(num);
}
for(let i=0; i<m; i++){
  const num=list2[i];
  if(set1.has(num)) set1.delete(num);
}

console.log(set1.size+set2.size);