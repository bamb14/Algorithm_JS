const fs = require("fs");
let a = fs.readFileSync(0).toString().trim().split('\n');

const [n,m]=a.shift().split(' ').map(Number)
const numbers=a

let start=Math.max(...a)
let end=10000*100000
let answer=end;

const check=(mid)=>{
    let count=1;
    let rest=mid;
    for(const money of numbers){
        if(rest-money<0){
            // 남은 돈이 써야할 돈 보다 작을 때
            count++;
            rest=mid;
        }
        rest=rest-money
    }
    if(count<=m) return true
    else return false
}

while(start<=end){
    const mid=~~((start+end)/2)
    if(check(mid)){
        answer=mid;
        end=mid-1
    }else start=mid+1;
}
console.log(answer)