const fs=require('fs');
let input=fs.readFileSync(0).toString().trim().split('\n');
const move=[[-1,0], [1,0], [0,-1], [0,1]];
const t=Number(input.shift());
let idx=0;
let answer=[];
for(let i=0; i<t; i++){
  const n = Number(input[idx++]);
  let points=[];
  points.push(input[idx++].split(' ').map(Number));
  for(let j=0; j<n; j++){
    points.push(input[j+idx].split(' ').map(Number));
  }
  idx+=n;
  points.push(input[idx].split(' ').map(Number));
  
  answer.push(solution(points));
  
  idx++;
}

console.log(answer.join('\n'));

function solution(points){
  let queue=[0];
  let visited= new Array(points.length).fill(false);
  visited[0]=true;

  while(queue.length>0){
    const curr = queue.shift();
    
    if (curr === points.length - 1) return "happy"; // 도착지 도달
    
    for (let i = 0; i < points.length; i++) {
      if (!visited[i]) {
        const dist = Math.abs(points[curr][0] - points[i][0]) + Math.abs(points[curr][1] - points[i][1]);
        if (dist <= 1000) {
          visited[i] = true;
          queue.push(i);
        }
      }
    }
  }
  return 'sad';
}