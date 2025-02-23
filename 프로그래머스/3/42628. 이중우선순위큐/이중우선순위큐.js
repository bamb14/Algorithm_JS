function solution(operations) {
    let answer=[]
    
    for(const command of operations){
        if(command[0]==='I'){
            answer.push(Number(command.split(' ')[1]))
            answer.sort((a,b)=>a-b)
        }else if(command[2]==='1'){
            answer.pop()
        }else{
            answer.shift()
        }
    }
    return answer.length===0? [0, 0]: [Math.max(...answer),Math.min(...answer)];
}