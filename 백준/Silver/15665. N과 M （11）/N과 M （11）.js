const fs = require("fs");
let a = fs.readFileSync(0).toString().trim().split('\n');
const [n,m] = a[0].split(" ").map(Number);
const numbers=a[1].split(' ').map(Number).sort((a,b)=>a-b);
let answer=[]
let result=[]

solution(0)

function solution(depth){
    if(depth===m){
        result.push(answer.join(' '))
        return;
    }
    
    for(let i=0; i<n; i++){
            answer.push(numbers[i])
            solution(depth+1);
            answer.pop();
    }
}
const set=new Set(result)

console.log([...set].join('\n'))