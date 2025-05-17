function solution(tickets) {
    let link=new Map();
    for(let [from, to] of tickets){
        if(!link.has(from)) link.set(from,[]);
        link.get(from).push(to);
    }
    for(let list of link.values()){
        list.sort();
    }
    
    let answer;
    bt('ICN',['ICN']);
    function bt(curr, route){
        if(route.length===tickets.length+1){
            answer=[...route];
            return true;
        }
        let list=link.get(curr);
        if(!link.has(curr) || list.length===0) return false;
        
        for(let i=0; i<list.length; i++){
            const next=list[i];
            list.splice(i,1);
            route.push(next);
            if(bt(next, route)) return true;
            route.pop();
            list.splice(i, 0, next);
        }
    }
    
    return answer;
}