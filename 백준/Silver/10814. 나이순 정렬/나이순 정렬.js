const fs=require("fs");
const input=fs.readFileSync(0).toString().trim().split('\n');

const n=Number(input.shift());

const list=input.map((str, i)=>{
  const [age, name]=str.split(' ');
  return [Number(age), name, i];
});

list.sort((a,b)=>{
  if(a[0]!==b[0]) return a[0]-b[0];
  return a[2]-b[2];
})

console.log(
  list.map(([age, name]) => `${age} ${name}`).join('\n')
);