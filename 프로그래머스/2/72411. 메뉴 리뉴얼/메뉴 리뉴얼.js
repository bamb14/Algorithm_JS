function solution(orders, course) {
    const answer=[];
    for(const len of course){
        const result=[];
        for(const order of orders){
            if(order.length>=len){
                const visited=new Array(order.length).fill(false);
                let max=0;
                bt([], 0, len, order, result, visited);
            }
        }
        const map=new Map();
        let max=0;
        for(const comb of result){
            const cnt=map.get(comb) || 0;
            map.set(comb, cnt+1);
            max=Math.max(max, cnt+1);
        }
        
        if(max>=2){
            for(const [key,  value] of map.entries()){
                if(value==max) answer.push(key);
            }
        }
    }
    
    return answer.sort();
}

function bt(arr, idx, len, order, result, visited){
    if(arr.length>=len){
        result.push([...arr].sort().join(''));
        return;
    }
    for(let i=idx; i<order.length; i++){
        if(!visited[i]){
            arr.push(order[i]);
            visited[i]=true;
            bt(arr, i+1, len, order, result, visited);
            visited[i]=false;
            arr.pop();
        }
    }
}