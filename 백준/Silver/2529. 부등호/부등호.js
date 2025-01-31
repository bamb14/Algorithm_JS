const fs = require("fs");
let a = fs.readFileSync(0).toString().trim().split('\n');
const n=Number(a[0])
const sign=a[1].split(' ')
const m=sign.length
const numbers_asec=Array.from({length:10},(_, i) => i)
const numbers_desc=[...numbers_asec].sort((a,b)=>b-a)
let visited=Array.from({length: 10}).fill(0)
const answer_asec=[]
const answer_desc=[]
const result_asec=[]
const result_desc=[]

function solution(depth,idx,answer,numbers,result){
    if(depth===m+1){
        const string=answer.join('')
        result.push(string)
        return;
    }
    // console.log('depth',depth,'idx',idx)
    // console.log(answer[idx],sign[idx])
    // console.log('answer',answer)
    for(let i=0; i<10; i++){
        if(result.length!==0) break;
        if(!visited[i]){
            // console.log(i,'아직 방문 안함')
            if(depth===0){
                visited[i]=1;
                answer.push(numbers[i]);
                // console.log(answer)
                solution(depth+1,idx,answer,numbers,result);
                answer.pop();
                visited[i]=0;
                continue;
            }
            if(sign[idx]==='<'&&answer[idx]<numbers[i]||sign[idx]==='>'&&answer[idx]>numbers[i]){
                // console.log(answer[idx],sign[idx],numbers[i])
                visited[i]=1;
                answer.push(numbers[i]);
                solution(depth+1,idx+1,answer,numbers,result);
                answer.pop();
                visited[i]=0;
            }
        }
    }
}

solution(0,0,answer_asec,numbers_asec,result_asec)
solution(0,0,answer_desc,numbers_desc, result_desc)
console.log(result_desc[0])
console.log(result_asec[0])