function solution(array, commands) {
    let answer = [];
    const len=commands.length;
    
    for(let i=0; i<len; i++){
        let Array=[...array].slice(commands[i][0]-1, commands[i][1]).sort((a,b)=>a-b);
        console.log(Array);
        answer.push(Array[commands[i][2]-1]);
    }
    return answer;
}