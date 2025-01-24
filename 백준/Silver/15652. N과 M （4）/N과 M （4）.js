const fs = require("fs");
let a = fs.readFileSync(0).toString().trim().split('\n');
const [n,m] = a[0].split(" ").map(Number);
let visited=Array.from({length: n}).fill(0)
let answer=[]

solution(0,1)

function solution(depth, idx){
    if(depth===m){
        const result=answer.join(' ')
        console.log(result)
        return;
    }
    
    for(let i=idx; i<=n; i++){
        // if(!visited[i]){
            // visited[i]=1;
            answer.push(i)
            solution(depth+1,i);
            answer.pop();
            // visited[i]=0;
        // }
    }
}