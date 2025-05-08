function solution(tickets) {
    let link=new Map();
    for(let [start, end] of tickets){
        if(!link.has(start)) link.set(start, []);
        link.get(start).push(end);
    }
    
    for(let list of link.values()){
        list.sort().reverse();
    }
    var answer = [];
    dfs('ICN',['ICN']);
    
    function dfs(curr, route){
        if(route.length===tickets.length+1){
            answer.push(route);
            return true;
        }
        
        let end=route[route.length-1];

        const destList = link.get(curr);
        if (!destList || destList.length === 0) return false;
        
        for (let i = destList.length - 1; i >= 0; i--) {
            const next = destList[i];
            destList.splice(i, 1); // 방문 표시
            route.push(next);
            if (dfs(next, route)) return true; // 찾으면 바로 종료
            route.pop();
            destList.splice(i, 0, next); // 복구
        }
        
    }
    
    return answer[0];
}