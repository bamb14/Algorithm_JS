const fs = require("fs");
let a = fs.readFileSync(0).toString().trim().split('\n');
const [n,m]=a[0].split(' ').map(Number)
const alphabet=a[1].split(' ').sort()
const vowel=['a', 'e', 'i', 'o', 'u']
let visited=Array.from({length: m}).fill(0)
const answer=[]
const result=[]

function solution(depth,idx){
    if(depth===n){
        const string=answer.join('')
        let count=0;
        [...string].some(char=>{
            if(vowel.includes(char)) count++
        })
        if(count>0 && (n-count)>1){
            result.push(string)
        }
        return;
    }
    for(let i=idx; i<m; i++){
        if(!visited[i]){
            visited[i]=1;
            answer.push(alphabet[i]);
            solution(depth+1,i);
            answer.pop();
            visited[i]=0;
        }
    }
}

solution(0,0)
console.log(result.join('\n'))