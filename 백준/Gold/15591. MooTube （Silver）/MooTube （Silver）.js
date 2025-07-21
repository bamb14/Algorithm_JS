const fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');

const [n, q] = input.shift().split(' ').map(Number);

const link=Array.from(Array(n+1), ()=>[]);
for(let i=0; i<n-1; i++){
  const [from, to, value] = input[i].split(' ').map(Number);
  link[from].push([to,value]);
  link[to].push([from, value]);
}

const answer=[];
for(let i=n-1; i<n+q-1; i++){
  const [k, start]=input[i].split(' ').map(Number);
  answer.push(solution(k, start));
}

console.log(answer.join('\n'));

function solution(k, start){
  let queue=[[start, Infinity]];
  let cnt=0;
  const visited=new Array(n+1).fill(false);
  visited[start]=true;
  
  while(queue.length>0){
    const [curr, min]=queue.shift();
    
    for(const [neighbor, value] of link[curr]){
      if(visited[neighbor]) continue;
      let newMin=Math.min(min, value);
      if(newMin>=k){
        cnt++;
        visited[neighbor]=true;
        queue.push([neighbor, newMin]);
      }
    }
  }
  return cnt;
}

