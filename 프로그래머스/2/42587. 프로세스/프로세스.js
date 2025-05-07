function solution(priorities, location) {
    var answer = 0;
    let queue=[];
    for(let i=0; i<priorities.length; i++){
        queue.push([priorities[i], i]);
    }
    let priority=priorities.sort((a,b)=>b-a);
    while(queue.length>0){
        let [p, index]=queue.shift();
        if(priority[0]===p){
            priority.shift();
            answer++
            if(index===location) break;
        }
        else queue.push([p, index]);
    }
    return answer;
}