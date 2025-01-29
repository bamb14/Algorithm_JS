const fs = require("fs");
let a = fs.readFileSync(0).toString().trim().split('\n');
const [n,m] = a[0].split(" ").map(Number);
let answer=[]
let result=[]

solution(0,0)

function solution(depth){
    if(depth===m){
        // const result=answer.join(' ')
        result.push(answer.join(' '))
        return;
    }
    
    for(let i=1; i<=n; i++){
        answer.push(i)
        solution(depth+1);
        answer.pop();
    }
}

console.log(result.join('\n'))