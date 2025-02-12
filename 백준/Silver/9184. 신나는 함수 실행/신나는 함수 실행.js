const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

input=input.map(str=>str.split(' ').map(Number))

const length=input.length

let mem=Array.from(Array(21), ()=> Array.from(Array(21), ()=> Array(21).fill(0)))


const solution=(a,b,c)=>{
  if(a<=0||b<=0||c<=0) return 1
  if(a>20||b>20||c>20) return solution(20,20,20)
  if(mem[a][b][c]) return mem[a][b][c]
  if(a<b && b<c){
    mem[a][b][c] = solution(a,b,c-1) + solution(a,b-1,c-1) - solution(a,b-1,c)
    return mem[a][b][c]
  }
  else {
    mem[a][b][c] = solution(a-1,b,c) + solution(a-1,b-1,c) + solution(a-1,b,c-1) - solution(a-1, b-1, c-1)
    return mem[a][b][c]
  }
}

for(let i=0; i<length-1; i++){
  const [a,b,c]=input[i];

  console.log(`w(${a}, ${b}, ${c}) =`,solution(a,b,c))
}
