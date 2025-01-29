const fs = require("fs");
let a = fs.readFileSync(0).toString().trim().split('\n');
const [n,m] = a[0].split(" ").map(Number);
const numbers=a[1].split(' ').map(Number).sort((a,b)=>a-b);
let visited=Array.from({length: n}).fill(0)
let answer=[]
let result=[]

solution(0)

function solution(depth){
    if(depth===m){
        // const result=answer.join(' ')
        result.push(answer.join(' '))
        return;
    }
    
    for(let i=0; i<n; i++){
        // if(!visited[i]){
            // visited[i]=1;
            answer.push(numbers[i])
            solution(depth+1);
            answer.pop();
            // visited[i]=0;
        // }
    }
}

console.log(result.join('\n'))