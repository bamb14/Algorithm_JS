const fs = require("fs");
let a = fs.readFileSync(0).toString().trim().split('\n');

const [n,m] = a[0].split(" ").map(Number);
let visited=Array.from({length: n}).fill(0)
let answer=[]
solution(0)

function solution(depth){
    if(depth===m){ //답의 끝까지 다 나왔을때?
        const result=answer.join(' ')
        console.log(result)
        return;
    }
    
    for(let i=1; i<=n; i++){
        if(!visited[i]){
            visited[i]=1;
            answer.push(i)
            solution(depth+1);
            answer.pop();
            visited[i]=0;
        }
    }
}

