const fs = require("fs");
let a = fs.readFileSync(0).toString().trim().split('\n');

const [m,n] = a[0].split(" ").map(Number);

let visited=Array.from({ length: Math.max(m,n)+2 }).fill(1);
visited[m]=0
let queue=[m]
let answer=0;


function bfs(){
    if(m===n) return 0;
    while(queue.length){
        const size=queue.length;
        for(let j=0; j<size; j++){
            const curr=queue.shift();
            for(const move of [curr + 1, curr - 1, curr * 2]){
                if(move===n) return answer+1;
                // if(move<Math.max(m,n)+1||move>Math.min(m,n)-1) continue;
                if(visited[move]){
                    visited[move]=0;
                    queue.push(move);
                }
            }
        }
        answer++;
    }
    return answer;
}


console.log(bfs())

