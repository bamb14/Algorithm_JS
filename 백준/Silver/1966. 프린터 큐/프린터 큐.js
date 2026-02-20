const fs=require('fs');
const input=fs.readFileSync(0).toString().trim().split('\n');

const test=Number(input.shift());
const answer=[];
for(let i=0; i<test; i++){
  const [n, target] = input[i*2].split(' ').map(Number);
  const queue=input[i*2+1].split(' ').map((v, i)=> [v, i]);

  let cnt=0;
  let max=Math.max(...queue.map(x=>x[0]));

  while(queue.length){
    const [front, index]=queue.shift();
    if(front>=max){
      cnt++;
      if(index==target){
        answer.push(cnt);
        break;
      }
      max=Math.max(...queue.map(x=>x[0]));
    }
    else queue.push([front, index]);
  }
  
}

console.log(answer.join('\n'));